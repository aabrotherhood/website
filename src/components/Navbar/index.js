import React, {Component} from 'react';
import Img from 'react-image';
import Preloader from '../Preloader/index';
import Logo from '../../assets/aab_logo.svg';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as RRDLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './styles.scss';

class Navbar extends Component {
  render () {

    return (
      <Row className='navbar'>
        <Col sm={2}>
          <Img className='navbarLogo' src={Logo} loader={<Preloader/>} alt='AAB logo'/>
        </Col>
        <Col className="navBarText">
        <Link 
          to="mission" 
          spy={true} 
          smooth={true} 
          duration={500} >About</Link>
        </Col>
        <Col className="navBarText">
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500} >Contact</Link>
        </Col>
        <Col className="navBarText">
          <RRDLink to={ROUTES.MEMBERS}>Members</RRDLink>
        </Col>
      </Row>
     );
  }
};

export default Navbar;
