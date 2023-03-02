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
        '2zg2ucutigk9rgcwj0joxr': "Eric Li (S)",
        '33lsglc0b621ux54n4jgb7': "Khanh Le",
        '512fa2i0cv84a1o37gbdan': "Brandon Kwon",
        '5sh19dgh3dnnk8c7fstp': "Henry Xuan",
        '5u7vjkmkdhs8tex3f8xd9a': "Justin Liu",
        '7tp8c874unoklhbk13vdd': "Adam Mohamed",
        '7voa5ovztsjqrzr3ususq': "Cyril Leahy",
        '88shi35m5ji82hemr7r8el': "Sean Meng",
        '8fhm29j59rhb2o1v6m84k': "Albert Shin",
        '8hzdceh877jyt8lq54417': "Dylan Rhee", 
        '9m7ve4wbp6g8f68iutz42b': "Jeffrey Shi", 
        'be1ts50h4b5ctjp5h0y96c': "Sean Yu",
        'eeomh5olx9etzkh1qk1eec': "Hank Yang", 
        'f53rp5ytvp5zq4z0igcqc8': "Kevin Wang",
        'fsd3mu2axurk0deynjs8uk': "Eric Li", 
        'gf32p5tsvwmftqd54742n': "Kyle Neeley", 
        'gujxqelc7hjyb1z84dahp': "Matthew Kim", 
        'h0t9714q3zsy8fnawz4td': "Josh Zhang", 
        'i6zc72qj8fjviw1d8pvim9': "Lucie Bai", 
        'i8405c2mg58wluy19tei9': "Connor Lee", 
        'irl9p0suuxjsouk4ujwwe': "Beier Nelson", 
        'j74hhwkua8p69dd2ceel': "Jang Choe", 
        'joxmf1kaysb2lsiov4xfjb': "Victor Ghosh", 
        'khtjyhi15pgrvz5esfl8j': "Minkai Li", 
        'kwozd2fs34amzjunqu28f': "Nick Gu", 
        'mha40ib7cmj6km15409509': "Aidan Chen",
        'mnlwyf46ody0kxgrc91i': "Ryan Jung", 
        'mwalfhyjo357ot3visndc': "Jane Oh", 
        'notn3kh17obrptqqp3ltn': "Lei Hanna",
        'o3vcfpnqd99s9dsjtyjsl': "Francis Puente",
        'q4pdzs9av1dtlihcqoqy3k': "Kelly Nguyen",
        'q8a1a9qk6sqtquuizop6r': "Roy Han",
        'qds5qs4m46jmhlj84tt6al': "Derek Zheng",
        'rvmvpx4iq2nj5ndkhi7hu': "Dylan Jin-Ngo",
        'rwwqzx9aopcsw0iifqocp': "Darren Tran",
        'ss8cgltmq5xn5a9wlpios': "Daniel Wang",
        'uh37dt05t176mkxzck765t': "Ali Khan",
        'w5g1doaefnon6356r49r8': "Atticus Lee",
        'ys8siehhxshfiyq6zztnfl': "Aidan Zhou", 
        'yua2bcfchhdrfnqiogunz': "Lauryn Wilson",  },
        loading: false,
        'recruitVotes': {
          '4z34771kuwc6d8i95ewcj6': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'zzikerjbn1mmbfvf5w0t9b': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'yxddr58djj1934akgwt09': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'yusrxvveqc9zrq6pbxh4u': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'ynftqgjg50bsm7xko0y5ph': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'ym3uapfd8cda0aixzj18': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'xklj6ch21uiagtoa1z9v': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'xcad8d8v4pttbwmvokwb': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'wm9ofgs8u1e43uo24akdf': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'w05gtcxo0q8k4iq31rcw1': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'uy3zdxtpdl0648po92o47': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'ult0gs9tr2l4insekb1kfr': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'p05dldd8226tzcz8iplv6': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'ocktjb9dezit7d1hgvaxt9': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'nudg9r0cizeb8y1mydhd2w': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'nm687p60epxn3c0tzepwh': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'mvwa46yg7qpsbrgdky4wj': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'lik034xotmn4udg8178': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'l71qifa26gseyupgjr0uh': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'l5jhd7r7i0qxvcc9v58i7o': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'kteaw0ckmdxj2cjbs764h': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'jvdo2qmcqfih2nk6h65yk': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'jelhixvz7petwrpuk5buzg': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'ja7n8l9nottlmy7dtx7qr': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'ihyjxonrfzq3sm4xit3n2i': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'glw2gtq49zbhhh9yolp9f': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'f7h4127i9af98jgdo91nq': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'dq1nepgirow935bpix741p': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'dmp5cbagdbxtdq1szrgz': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'daowiae9cmd7vz5aq0ov13': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'cstftpj2zj6shbcnuxwh4k': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'cmyv6rrx9s4tm3t4skgwy': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'cihl5fzlc7ln1w3t4s9et7': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'c9914cyoxupb8e3yegxgc': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'c71yc8tpxoou794clvcfwf': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'by4926397stzi19higab': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'aetbs9fw2mdmy4sqifeg1n': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'abjzgkws9qfktbandic54j': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'a6wg4iwxwl2zmf6f3lw3d': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'a5c37qstumd8zup8prwr': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '9cy1svpf0f9r6a85tarxri': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '97jm0zsc4en59rl17fdoi': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '8qem8sszp47bwsweuuzgva': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '8ejrwsgbiib4d0e1sz3n': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '89jxige59jwhzhkcmptvyn': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '7on0klgvusrhm3l1aznsbc': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '6snsz913q5q3g7xpzwhoyy': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '6oihxhrsqe8g32g21xg58f': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '5gkvrlmzi7wgru4kx6lxqr': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '4x339jcg2ksqbc8dpg45sg': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '02r1a6ac67tp89zk5hivg': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '1zzemht7in7yu6zb1gleko': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '2xumgeav1iur30stz5128o': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '3ycu9umcc2n7aiufr5z4ok': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '43b86qc0nxpjuxvn1falvc': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '4fcme6a940aenxx735fc46': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '4k35ivi0bki9m2wrt18zs': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
           
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