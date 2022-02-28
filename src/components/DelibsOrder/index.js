import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Brother from '../Brother';
import {withAuthorization} from '../Sessions';

class DelibsOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitsDict: {
        '0w2h6jzmcaaozrn9ojq79ss': "Caroline Ko",
        '39ms52xa56krilswdcksa': "David Cao",
        '4mhlcumk31byigj8a7xg7d': "Josh Zhu",
        '4q1qpc5vwxar1c0nprbouf': "Matthew Chang",
        '7c9zqkqaxfjfidqs9f4irs': "Juliette Low Fleury",
        '7otx56f1ca8tw3epzuclw': "Joshua Fang",
        '859cfyz15aw0c1t27l6df': "Jennifer Chu",
        '92ze2cmv1l34yazst9qvh': "Howie Guo",
        '9u9j1eup4zeqjfaey2wp8d': "Joon Kim",
        '9ziwpehiui3gkihbdnjln': "Brian Ma",
        'avcndeg4l2g1tqk1vu5l9b': "Brandon Won",
        'ayp15rbs59hyvzmze5tkns': "Ilyas Mardin",
        'bozlnv6edp6asy8fkshil': "Richard Kim",
        'cam6ygowj68a1bggtqy74i': "Kevin  Chew",
        'cc5ar2wdxesjo0tdr3715p': "Matthew Li",
        'crd3z2z6onvdaf9z94ivb': "Dennis Lin",
        'd0i27tgtjxcohjjcw2pt1k': "Daran Zhao", 
        'dl8wjynmyvlxm2wrxlf8h': "Amanda Su",
        'ftccy3f8l0k1jzlcei3odm': "Jaron Zhou",
        'g8kqrat19al86t7a6jeo2e': "Jack Li",
        'gantv8sljhmyrkrjwfm6ts': "Ethan Whang",
        'gkc4r5c3b49nthohq7nwo': "Roger  Cawdette",
        'iciwb8rnacn3yvrxndwh6y': "Eric Sun",
        'jcmijoq7vljp0sp5binpue': "Danny Kim",
        'n52gq8sz2429wrbqq91p4': "Adam Xiao",
        'n952qpm78g9mg6kl2s2ph': "Cindy Liu",
        'psb503a6wod0oxw86uylq': "Benjamin Chun",
        'qcluhnw8shja1uuhpmnu0e': "Jonathan Zhang",
        'qcouk1q5ayfg1d50laosjm': "Jimmy Lin",
        's406fq19g3d8ud9gfz3osw': "Christopher Ma",
        'ugbckdn2a5ny6o8afd9wg9': "David Cho",
        'vb9nfajj8u98jrknmsiqb': "Saimun Habib",
        'w84s41kckip1mv9e2wen': "Lilia Gonzales",
        'wdfi19vj3qcszj1va80xb': "Alex Zhu",
        'wulbaq8ta9mvzndwe3nxgm': "Cat Hyeon",
        'zhqk6vl35el174g92hxkgz': "Christopher Cheng",      },
    };
  }

  componentDidMount() {
    this.props.firebase.recruits().on('value', snapshot => {
      const recruitsList = snapshot.val();
      const recruitsUID = Object.keys(this.state.recruitsDict);
      if (recruitsList) {
        const recruitsInfoList = Object.keys(recruitsList).map(key => {
          if (recruitsUID.indexOf(key) >= 0) {
            const newData = {
              ...recruitsList[key],
              uid: key
            };
            return (<Brother info={newData} key={key} nextURL={'/delibs/order/' + recruitsList[key].first + recruitsList[key].last}/>);
          }
        });

        this.setState({recruitInfo: recruitsInfoList, loading: true});
      }   else {
          this.setState({recruitInfo: null, loading: false})
        }
    });
  }

  render() {
    const {recruitInfo, loading} = this.state;
   
    return (
      <Col>
        <Row className="delibsOrder">
          {loading ? recruitInfo : <div></div>}
        </Row>
      </Col>
    );
  }
};

const condition = authUser => !!authUser;
export default withAuthorization(condition)(DelibsOrder);