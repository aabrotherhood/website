import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import {Row, Col} from 'react-bootstrap';
import './styles.scss';
//import { Link } from 'react-router-dom';

class Meals extends Component {
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
        'yua2bcfchhdrfnqiogunz': "Lauryn Wilson"
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