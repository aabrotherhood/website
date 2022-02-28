import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import Loading from '../../assets/loading.gif';
import {Form, Col, Row, Button} from 'react-bootstrap';
import './styles.scss';

class Final extends Component {
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
        '4z34771kuwc6d8i95ewcj6': "Stephanie Lin",      },
        loading: false,
        'recruitVotes': {

          '09drnf7vijzkzr6ntt5nqy': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '0mf62cwonebrd2p2hj8bnr': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '0w2h6jzmcaaozrn9ojq79ss': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '2htilapljom926d367p1s': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '39ms52xa56krilswdcksa': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '4mhlcumk31byigj8a7xg7d': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '4q1qpc5vwxar1c0nprbouf': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '7c9zqkqaxfjfidqs9f4irs': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '7otx56f1ca8tw3epzuclw': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '859cfyz15aw0c1t27l6df': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '92ze2cmv1l34yazst9qvh': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '9u9j1eup4zeqjfaey2wp8d': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          '9ziwpehiui3gkihbdnjln': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'avcndeg4l2g1tqk1vu5l9b': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'ayp15rbs59hyvzmze5tkns': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'bozlnv6edp6asy8fkshil': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'cam6ygowj68a1bggtqy74i':{
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'cc5ar2wdxesjo0tdr3715p': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'crd3z2z6onvdaf9z94ivb': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'd0i27tgtjxcohjjcw2pt1k': {
            'yes': 0,
            'no': 0,
            'maybe': 0, }, 
          'dl8wjynmyvlxm2wrxlf8h': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'ftccy3f8l0k1jzlcei3odm': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'g8kqrat19al86t7a6jeo2e': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'gantv8sljhmyrkrjwfm6ts': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'gh2fuxcio7fugqoj8jnr8': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'gkc4r5c3b49nthohq7nwo': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'iciwb8rnacn3yvrxndwh6y': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'jcmijoq7vljp0sp5binpue':{
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'n52gq8sz2429wrbqq91p4': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'n952qpm78g9mg6kl2s2ph': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'psb503a6wod0oxw86uylq': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'qcluhnw8shja1uuhpmnu0e': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'qcouk1q5ayfg1d50laosjm': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          's406fq19g3d8ud9gfz3osw': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'ugbckdn2a5ny6o8afd9wg9': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'vb9nfajj8u98jrknmsiqb': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'w84s41kckip1mv9e2wen': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'wdfi19vj3qcszj1va80xb': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'wulbaq8ta9mvzndwe3nxgm': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },
          'zhqk6vl35el174g92hxkgz': {
            'yes': 0,
            'no': 0,
            'maybe': 0, },  
        }

    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submitted: true});
    this.props.firebase.final().once('value', snapshot => {
      const finalVotes = snapshot.val();
      if (finalVotes) {
        Object.keys(finalVotes).forEach(key => {
          const newYes = this.state.recruitVotes[key]['yes'] + finalVotes[key]['yes'];
          const newNo = this.state.recruitVotes[key]['no'] + finalVotes[key]['no'];
          const newMaybe = this.state.recruitVotes[key]['maybe'] + finalVotes[key]['maybe'];
          this.setState({'recruitVotes': {
            ...this.state.recruitVotes,
            [key]: {
              yes: newYes,
              no: newNo,
              maybe: newMaybe
            }
          }})
        });
      }
      this.props.firebase.final().set(this.state.recruitVotes, error => {
        if (error) {
          console.log('something went wrong');
        } else {
          console.log('successfully updated votes');
          this.props.history.push('/home')
        }
      })
    });
  }

  componentDidMount() {
    const recruitsDict = this.state.recruitsDict;
    var recruitsList = [];
    const handleChange = val => {
      const recruit = val.target.value.split(',');
      switch (recruit[0]) {
        case 'yes': 
          this.setState({'recruitVotes': {
            ...this.state.recruitVotes,
            [recruit[1]]: {
            yes: 1,
            no: 0,
            maybe: 0
          }}});
          break;
        case 'no':
          this.setState({'recruitVotes':{
            ...this.state.recruitVotes,

            [recruit[1]]: {
            yes: 0,
            no: 1,
            maybe: 0
          }}});
          break;
        default:
          this.setState({'recruitVotes':{
            ...this.state.recruitVotes,

            [recruit[1]]: {
            yes: 0,
            no: 0,
            maybe: 1
          }}});
          break;
      }
    };

    Object.keys(recruitsDict).forEach(key => {
      recruitsList.push(
        <Row key={key} className="vote">
            <p>{recruitsDict[key]}</p>
            <div>
              <Form.Check custom inline value={"yes,"+key} onChange={handleChange} label="Yes" type="checkbox" id={`custom-inline-checkbox-1-${key}`}/>
              <Form.Check custom inline value={"no,"+key} onChange={handleChange} label="No" type="checkbox" id={`custom-inline-checkbox-2-${key}`}/>
              <Form.Check custom inline value={"maybe,"+key} onChange={handleChange} label="Maybe" type="checkbox" id={`custom-inline-checkbox-3-${key}`}/>
            </div>
          </Row>
      );
    });
    this.setState({recruitsList: recruitsList, loading: true});
  }

  render() {
    const {recruitsList, loading} = this.state;
    return(
      <Col className="recruitVotes">
        {this.state.submitted ?
          <div className="loading">
            <img src={Loading} alt="loading gif" className="spinner"/>
          </div> : <div></div>}
        <Form onSubmit={this.handleSubmit} className="recruitForm">
          {loading ? recruitsList : <div></div>}
          <Button className="customButton" type="submit">Submit</Button>
        </Form>
      </Col>
    );
  }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Final);