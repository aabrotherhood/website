import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import {Row, Col} from 'react-bootstrap';
import './styles.scss';

class Meals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // oldRecruitsDict: {
      //   '0mf62cwonebrd2p2hj8bnr': "Robert Harraka",
      //   '0w2h6jzmcaaozrn9ojq79ss': "Caroline Ko",
      //   '2htilapljom926d367p1s': "Reddy  Lee",
      //   '39ms52xa56krilswdcksa': "David Cao",
      //   '4mhlcumk31byigj8a7xg7d': "Josh Zhu",
      //   '4p6odq1a8sji1eeq9fz6oi': "PK Kumar",
      //   '4q1qpc5vwxar1c0nprbouf': "Matthew Chang",
      //   '7c9zqkqaxfjfidqs9f4irs': "Juliette Low Fleury",
      //   '7otx56f1ca8tw3epzuclw': "Joshua Fang",
      //   '859cfyz15aw0c1t27l6df': "Jennifer Chu",
      //   '92ze2cmv1l34yazst9qvh': "Howie Guo",
      //   '9u9j1eup4zeqjfaey2wp8d': "Joon Kim",
      //   '9ziwpehiui3gkihbdnjln': "Brian Ma",
      //   'aix45yul74ub03hulklwno': "Derek Zheng",
      //   'avcndeg4l2g1tqk1vu5l9b': "Brandon Won",
      //   'ayp15rbs59hyvzmze5tkns': "Ilyas Mardin",
      //   'bozlnv6edp6asy8fkshil': "Richard Kim",
      //   'cam6ygowj68a1bggtqy74i': "Kevin  Chew",
      //   'cc5ar2wdxesjo0tdr3715p': "Matthew Li",
      //   'crd3z2z6onvdaf9z94ivb': "Dennis Lin",
      //   'd0i27tgtjxcohjjcw2pt1k': "Daran Zhao", 
      //   'dl8wjynmyvlxm2wrxlf8h': "Amanda Su",
      //   'f1e1pib9r4h1gkvsodn0rm': "Aaron Sun",
      //   'ftccy3f8l0k1jzlcei3odm': "Jaron Zhou",
      //   'g8kqrat19al86t7a6jeo2e': "Jack Li",
      //   'gantv8sljhmyrkrjwfm6ts': "Ethan Whang",
      //   'gh2fuxcio7fugqoj8jnr8': "Lawrence Jia",
      //   'gkc4r5c3b49nthohq7nwo': "Roger  Cawdette",
      //   'i9wzy9kcwd8lbh86qh7ao': "Albert Shin",
      //   'iciwb8rnacn3yvrxndwh6y': "Eric Sun",
      //   'ip8xv0dcyvnjr008gza5n': "Ben Chiu",
      //   'jcmijoq7vljp0sp5binpue': "Danny Kim",
      //   'n52gq8sz2429wrbqq91p4': "Adam Xiao",
      //   'n952qpm78g9mg6kl2s2ph': "Cindy Liu",
      //   'psb503a6wod0oxw86uylq': "Benjamin Chun",
      //   'qcluhnw8shja1uuhpmnu0e': "Jonathan Zhang",
      //   'qcouk1q5ayfg1d50laosjm': "Jimmy Lin",
      //   'rh84o7neegyi9goz476f': "Chris Thorn",
      //   's406fq19g3d8ud9gfz3osw': "Christopher Ma",
      //   'u9mqdoigq3gliz4v7nyeog': "Lucas Chu",
      //   'ugbckdn2a5ny6o8afd9wg9': "David Cho",
      //   'vb9nfajj8u98jrknmsiqb': "Saimun Habib",
      //   'w84s41kckip1mv9e2wen': "Lilia Gonzales",
      //   'wdfi19vj3qcszj1va80xb': "Alex Zhu",
      //   'wulbaq8ta9mvzndwe3nxgm': "Cat Hyeon",
      //   'xu1ky6glcoqq09s0y3log': "Brian Lee",
      //   'yckldsptgvl9mzuz6kbbam': "Eric Li",
      //   'zhqk6vl35el174g92hxkgz': "Christopher Cheng",      }, 
      recruitsDict: {}
    };
  }

  componentDidMount() {
    this.props.firebase.recruits().on('value', snapshot => {
      const recruitsList = snapshot.val();
      var recruitInfoList = Object.keys(recruitsList).map(key => ({
        first: recruitsList[key]['first'],
        last: recruitsList[key]['last'],
        uid: key,
      }));
    for (var recruit in recruitInfoList) {
      recruitsDict[recruitInfoList[recruit].uid] = [recruitInfoList[recruit]]
    }
  });
    const currentBro = this.props.firebase.currentUser().uid;
    var commented = [];
    var noComment = []; 
    this.props.firebase.commentsNew().on('value', snapshot => {
      const comments = snapshot.val();
      Object.keys(comments).forEach(key => {
        if (currentBro in comments[key]) {
          commented.push(<p key={key}>{this.state.recruitsDict[key]}</p>);
        } else {
          noComment.push(<p key={key}>{this.state.recruitsDict[key]}</p>);
        }
      });
      this.setState({commented: commented, noComment: noComment, loading: true});
    });
  }

  render() {
    const {commented, noComment, loading} = this.state;
    return(
      <Row className="mealsRow">
        <Col xs={6} className="mealsCol">
          <h1>Grabbed Meals</h1>
          {loading ? commented : []}
        </Col>
        <Col xs={6} className="mealsCol">
          <h1>Haven't Grabbed Meals</h1>
          {loading ? noComment : []}
        </Col>
      </Row>
    )
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Meals);