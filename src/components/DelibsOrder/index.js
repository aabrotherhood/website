import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Brother from '../Brother';
import {withAuthorization} from '../Sessions';

class DelibsOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        '4z34771kuwc6d8i95ewcj6': "Stephanie Lin",     },
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
          else {
            return null
          };
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