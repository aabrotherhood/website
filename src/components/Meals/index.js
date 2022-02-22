import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import {Row, Col} from 'react-bootstrap';
import './styles.scss';
import { Link } from 'react-router-dom';

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
      recruitsDict: {
        '02r1a6ac67tp89zk5hivg': "Robert Harraka",
        '1zzemht7in7yu6zb1gleko': "Nick Gu",
        '2xumgeav1iur30stz5128o': "Justin Han",
        '3ycu9umcc2n7aiufr5z4ok': "Regina Lin",
        '43b86qc0nxpjuxvn1falvc': "Justin Chen",
        '4fcme6a940aenxx735fc46': "Micheal Zhang",
        '4k35ivi0bki9m2wrt18zs': "Logan Bednar",
        '4x339jcg2ksqbc8dpg45sg': "Z Yang",
        '5gkvrlmzi7wgru4kx6lxqr': "Austin Li",
        '6oihxhrsqe8g32g21xg58f': "Joyce Zhou",
        '6snsz913q5q3g7xpzwhoyy': "Shay Li",
        '7on0klgvusrhm3l1aznsbc': "Jonathan Zhang",
        '89jxige59jwhzhkcmptvyn': "Andrew Lee",
        '8ejrwsgbiib4d0e1sz3n': "Tyler Masuyama",
        '8qem8sszp47bwsweuuzgva': "Adam Park",
        '97jm0zsc4en59rl17fdoi': "Noah Lee",
        '9cy1svpf0f9r6a85tarxri': "Charlie Yang",
        '9sk1skhw9rneblhnrdtpgw': "Joseph Jang",
        'a5c37qstumd8zup8prwr': "Pierre Yan",
        'a6wg4iwxwl2zmf6f3lw3d': "Jun Chong",
        'abjzgkws9qfktbandic54j': "Paul Song",
        'aetbs9fw2mdmy4sqifeg1n': "Marissa Li",
        'by4926397stzi19higab': "Ricky Lam",
        'c71yc8tpxoou794clvcfwf': "Anna O'Neil",
        'c9914cyoxupb8e3yegxgc': "Ivan Zhang",
        'cihl5fzlc7ln1w3t4s9et7': "Jayson Lin",
        'cmyv6rrx9s4tm3t4skgwy': "Reddy Lee",
        'cstftpj2zj6shbcnuxwh4k': "Julian Li",
        'daowiae9cmd7vz5aq0ov13': "Jessica Liu",
        'dmp5cbagdbxtdq1szrgz': "Ziyong Cui",
        'dq1nepgirow935bpix741p': "Jason Oh",
        'f7h4127i9af98jgdo91nq': "Eileene Lee",
        'glw2gtq49zbhhh9yolp9f': "Ray Shang",
        'ihyjxonrfzq3sm4xit3n2i': "Ray Noh",
        'ja7n8l9nottlmy7dtx7qr': "Brandon Kim",
        'jelhixvz7petwrpuk5buzg': "Matthew Li",
        'jvdo2qmcqfih2nk6h65yk': "Haemaru Chung",
        'kteaw0ckmdxj2cjbs764h': "Tyler Kim",
        'l5jhd7r7i0qxvcc9v58i7o': "Bobby McCarthy",
        'l71qifa26gseyupgjr0uh': "Brandon Kwon",
        'lik034xotmn4udg8178': "Esther Xiang",
        'mvwa46yg7qpsbrgdky4wj': "Tony Huang",
        'nm687p60epxn3c0tzepwh': "Cosette Wu",
        'nudg9r0cizeb8y1mydhd2w': "Andrew Cheng",
        'ocktjb9dezit7d1hgvaxt9': "David Kang",
        'p05dldd8226tzcz8iplv6': "Daniel Kwon",
        'sc7m34bto5hnrm9vtb5f1f': "Danika Luo",
        'ult0gs9tr2l4insekb1kfr': "Ben Chiu",
        'uy3zdxtpdl0648po92o47': "Ethan Taotafa",
        'w05gtcxo0q8k4iq31rcw1': "Kyle Lee",
        'wm9ofgs8u1e43uo24akdf': "Miggy Antonio",
        'xcad8d8v4pttbwmvokwb': "Jamin Liu",
        'xklj6ch21uiagtoa1z9v': "Matt Sakiyama",
        'ym3uapfd8cda0aixzj18': "Seoyoung Ha",
        'ynftqgjg50bsm7xko0y5ph': "Calla Bai",
        'yusrxvveqc9zrq6pbxh4u': "Kevin Chew",
        'yxddr58djj1934akgwt09': "Ibraheem Khan",
        'zzikerjbn1mmbfvf5w0t9b': "Sean Finamore",
      }
    };
  }

  componentDidMount() {
  //   this.props.firebase.recruits().on('value', snapshot => {
  //     const recruitsList = snapshot.val();
  //     var recruitInfoList = Object.keys(recruitsList).map(key => ({
  //       first: recruitsList[key]['first'],
  //       last: recruitsList[key]['last'],
  //       uid: key,
  //     }));
  //     var recruitsDict = {};
  //   for (var recruit in recruitInfoList) {
  //     recruitsDict[recruitInfoList[recruit].uid] = [recruitInfoList[recruit]]
  //   }
  // });
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