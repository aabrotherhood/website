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
        <Col md={{offset : 5}} className="text">
          ABOUT
        </Col>
        <Col className="text">
          MEMBERS
        </Col>
        <Col className="text">
          CONTACT
        </Col>
        <Col className="text">
          GALLERY
        </Col>
      </Row>
     );
  }
};

export default Navbar;
