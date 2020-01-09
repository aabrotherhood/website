import React, {Component} from 'react';
import Img from 'react-image';
import Preloader from '../Preloader/index';
// import Logo from '../../assets/aab_logo.svg';
import {Row, Col} from 'react-bootstrap';
import './styles.scss';

class Navbar extends Component {
  render () {
    return (
      <Row>
        <Col sm={2}>
          {/* <Img className='navbarLogo' src={Logo} loader={<Preloader/>} alt='AAB logo'/> */}
        </Col>
        <Col className="navBarText">
          ABOUT
        </Col>
        <Col className="navBarText">
          MEMBERS
        </Col>
        <Col className="navBarText">
          CONTACT
        </Col>
        <Col className="navBarText">
          GALLERY
        </Col>
      </Row>
     );
  }
};

export default Navbar;
