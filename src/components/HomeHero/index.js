import React, {Component} from 'react';
import Img from 'react-image';
import {Col,Row} from 'react-bootstrap';
import Preloader from '../Preloader/index';
import HomeHeroPic from '../../assets/homeHero.jpg';
import './styles.scss';

class HomeHero extends Component {
  render() {
     return (
        <Col className="homeCol">
          <Row className='justify-content-start'>
            <h1 className='homeText homeTextTop'>Harvard</h1>
          </Row>

          <Img className='homeHeroPic' src={HomeHeroPic} loader={<Preloader/>} alt='2019 Group'/>
          
          <Row className='justify-content-end'>
           <h1 className='homeText homeTextBottom'>Asian American Brotherhood</h1>
          </Row>
        </Col>
     );
  }
};

export default HomeHero;