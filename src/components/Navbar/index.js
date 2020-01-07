import React, {Component} from 'react';
import {ReactComponent as Logo} from '../../aab_logo.svg';
import {Row, Col} from 'react-bootstrap';
import './styles.scss';

class Navbar extends Component {
  render () {
    return (
      <Row>
        <Col md={1}>
          <Logo></Logo>
        </Col>
        <Col md={{offset : 5}} className="navBarText">
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
