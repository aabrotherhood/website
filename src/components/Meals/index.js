import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import {Row, Col} from 'react-bootstrap';
import './styles.scss';
// import { Link } from 'react-router-dom';

class Meals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitsDict: {
        '0yj46hden1qt7oiziamtn': "Eli Kirtley", 
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
        'wz6x332xzjadiy46eunt0c': "Aaron Arlanza"
      }
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
      var recruitsDict = {};
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