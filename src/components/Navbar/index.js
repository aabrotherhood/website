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
        <Col md={{ span : 1, offset : 7}}>
          ABOUT
        </Col>
        <Col md={1}>
          MEMBERS
        </Col>
        <Col md={1}>
          CONTACT
        </Col>
        <Col md={1}>
          GALLERY
        </Col>
      </Row>
     );
}
};

export default Navbar;
