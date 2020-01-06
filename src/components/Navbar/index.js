import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../aabT.svg';
import {Row, Col} from 'react-bootstrap';
import './styles.scss';

class Navbar extends Component {
  render () {
    return (
      <Row>
        <Col md={1}>
          <Logo></Logo>
        </Col>
        <Col md={{ span : 1, offset : 5}}>
          ABOUT
        </Col>
        <Col md={{span : 1, offset : 0.5}}>
          MEMBERS
        </Col>
        <Col md={{span : 1, offset : 0.5}}>
          CONTACT
        </Col>
        <Col md={{span : 1, offset : 0.5}}>
          GALLERY
        </Col>
      </Row>
     );
}
};

export default Navbar;
