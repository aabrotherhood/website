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
        '0yj46hden1qt7oiziamtn': "Eli Kirtley", 
        '00aa4h0djucpc7360ae0dlkt': "Derek Yuan",
        '1900op1wsmq7rsj46ybzge': "Vincent Lo",
        '1lja9q7wkoxe5nrlmmaj7w': "Andrew Sima", 
        '2r9z5c60vc76yxe05wpyrc': "Kyle Neeley",
        '338yfagrol38arsd54d0ux': "Jason Cho",
        '3k398odtchdpdf9552286d': "Michael Xiang",
        '737r0qem5vabpywvlbmh8': "Gary Wu",
        '84i62d8pyldib5tpreohuf': "Emerson Lee",
        '8gwfmr6lwnd1gdnn0fz3sj': "Todd Zhou", 
        '8jxv9clxsbsr3mkbaush1s': "Thomas Leeds",
        '8urdawk3zkfrv6ta6pu4es': "Hank Yang",
        '90l56ukmn3gxwjje9hz43': "Sam Kim",
        'bydyjr5c5kw9y412jwqzcd': "Maxwell Lu",
        'dwqpj42buribfqa1j3cgr': "Grant Shueh",
        'e9vg0840pkhqy0z82bkhaa': "James Vincent Ines",
        'epuf449tlxc5w7ejcfmlkt': "Lei Hanna",
        'eq3m2lmksentygwv1k0fyp': "Xuanthe Nguyen",
        'ew42fhu81xt2zflfmagum': "Sean Meng",
        'ezuviswg2f8r4lx4vlynxe': "Raymond Qin",
        'f2gqbbyaedkt9sl4y8ocq': "Paul Jeon",
        'gomune2m6ucbe1hcs4thrm': "Andrew Chen",
        'h6spnfv3qe4n1w0hw1iwd9': "Kevin Sohn",
        'hwcgwyhcf787yu8vk8xp3p': "Jeffrey Shi",
        'iubcmfdx4bpbbs8do8l3db': "Peter Chen",
        'jqpxfe16gojmysp6gv5yh': "Maverick Yasuda",
        'khmnq70l8sbcuflbj1dxj5': "Jamin Liu",
        'kshjnmgjdf9z7d9aob34zs': "Minkai Li",
        'kvgqrfnp5lcjy38tyhmggj': "Annabel Ma",
        'ls5a7r2z1opn007cqk2du': "Ryan Ho",
        'n378hr5vqkqux6cobcmmhh': "Hudson Yang",
        'oloqdtnhmch5m5i7y5ov3o': "Matthew Vu",
        'p7hdg8sqk8d8a1r36c82iq': "Darren Tran",
        'p7wt9up9mqn6d3fui6u0n': "Arwen Zhang",
        'pu4884zn26yapkffa8w7d': "Connor Yu",
        'q5w4825if6ypg9ee0r97': "Kevin Gu",
        'rebq3zachfnrqweadozqf': "Corwin Cheung",
        's1oiakrsru8jcuyl189mi': "Jen Yu",
        'v2g6ekvtleu7lowlhnq6d': "Kelly Tung",
        'v942n2wj2lapnxq6x0onmg': "Cory Wu",
        'ww2qwx95jlb48sasw6hz5t': "Ian Hua",
        'wz6x332xzjadiy46eunt0c': "Aaron Arlanza",  },
        loading: false,
        'recruitVotes': {
          '0yj46hden1qt7oiziamtn': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '1900op1wsmq7rsj46ybzge': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '1lja9q7wkoxe5nrlmmaj7w': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '2r9z5c60vc76yxe05wpyrc': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '338yfagrol38arsd54d0ux': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '3k398odtchdpdf9552286d': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '737r0qem5vabpywvlbmh8': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '84i62d8pyldib5tpreohuf': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '8gwfmr6lwnd1gdnn0fz3sj': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '8jxv9clxsbsr3mkbaush1s': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '8urdawk3zkfrv6ta6pu4es': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          '90l56ukmn3gxwjje9hz43': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'bydyjr5c5kw9y412jwqzcd': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'dwqpj42buribfqa1j3cgr': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'e9vg0840pkhqy0z82bkhaa': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'epuf449tlxc5w7ejcfmlkt': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'eq3m2lmksentygwv1k0fyp': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'ew42fhu81xt2zflfmagum': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'ezuviswg2f8r4lx4vlynxe': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'f2gqbbyaedkt9sl4y8ocq': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'gomune2m6ucbe1hcs4thrm': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'h6spnfv3qe4n1w0hw1iwd9': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'hwcgwyhcf787yu8vk8xp3p': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'iubcmfdx4bpbbs8do8l3db': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'jqpxfe16gojmysp6gv5yh': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'khmnq70l8sbcuflbj1dxj5': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'kshjnmgjdf9z7d9aob34zs': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'kvgqrfnp5lcjy38tyhmggj': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'ls5a7r2z1opn007cqk2du': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'n378hr5vqkqux6cobcmmhh': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'oloqdtnhmch5m5i7y5ov3o': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'p7hdg8sqk8d8a1r36c82iq': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'p7wt9up9mqn6d3fui6u0n': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'pu4884zn26yapkffa8w7d': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'q5w4825if6ypg9ee0r97': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'rebq3zachfnrqweadozqf': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          's1oiakrsru8jcuyl189mi': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'v2g6ekvtleu7lowlhnq6d': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'v942n2wj2lapnxq6x0onmg': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'ww2qwx95jlb48sasw6hz5t': {
            'yes': 0,
            'no': 0,
            'maybe': 0,
          },
          'wz6x332xzjadiy46eunt0c': {
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