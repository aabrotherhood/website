import React, {Component} from 'react';
import Brothers from '../Brothers';
import Img from 'react-image';
import {Col,Row} from 'react-bootstrap';
import Preloader from '../Preloader';
import Bro2 from '../../assets/bro2.jpg';
import TopBar from '../TopBar';
import './styles.scss';

class Members extends Component {
  render() {
    return( 
      <Col className="members">
        <TopBar loggedIn="false"/>
        <Row className="topMembers justify-content-center">
          <h1 className="behindText">Asian American Brotherhood</h1>
          
          <Img className="memberImage" src={Bro2} loader={<Preloader/>} alt="Image of bro 2"></Img>
          <div>
            <h1 className="heading">Meet our Brothers</h1>
          </div>
        </Row>
        <Brothers type="members" />
      </Col>
    )
  }
}

export default (Members);