import React, {Component} from 'react';
import Brothers from '../Brothers';
import {Col} from 'react-bootstrap';
import Bro2 from '../../assets/activism.jpeg';
import {Parallax} from 'react-parallax';
import TopBar from '../TopBar';
import './styles.scss';

class Members extends Component {
  render() {
    return( 
      <Col className="members">
        <TopBar loggedIn="false"/>
        <Parallax
          className="homeHeroPic"
            blur={{ min: -3, max: 7 }}
            bgImage={Bro2} 
            bgImageAlt="2019 group"
            strength={-100}>
              <p className="homeLogo">Meet our Brothers</p>
            </Parallax>
        <Brothers type="members" />
      </Col>
    )
  }
}

export default (Members);