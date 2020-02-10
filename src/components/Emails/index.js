import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import Recruit from './recruit';
import {Col} from 'react-bootstrap';
import './recruit.scss'

class Emails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitmentInfoList: null,
      loading: false
    };
  }

  componentDidMount() {
    this.props.firebase.recruits().on('value', snapshot => {
      const recruits = snapshot.val();

      const recruitmentList = Object.keys(recruits).map(key => ({
        first: recruits[key].first,
        last: recruits[key].last,
        email: recruits[key].personalEmail,
        phone: recruits[key].phone,
        uid: key,
      }));

      const recruimentEmailList = recruitmentList.map(recruit => {
        console.log(recruit.email)
        return (
          <Recruit key={recruit.uid} info={recruit}/>
        );
      });

      this.setState({recruitmentInfoList: recruimentEmailList, loading: true});
    })
  }

  render() {
    const {recruitmentInfoList, loading} = this.state;
    return (
      <Col className="recruitsEmailCol" xs={8}>
        {loading ? 
        recruitmentInfoList : <div></div>
        }
      </Col>
    )
  };
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Emails);
