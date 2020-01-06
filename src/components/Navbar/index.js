import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../aabT.svg';
import {Row, Col} from 'react-bootstrap';
import './styles.scss';

class Navbar extends Compenent {
  render () {
    return (
      <Row>
        <Col md={1}>
          <Link className="link" to="/"><Logo></Logo></Link>
        </Col>
        <Col md={{ span : 1, offset : 3}}>
          ABOUT
        <Col>
        <Col md={1}>
          MEMBERS
        <Col>
        <Col md={1}>
          CONTACT
        <Col>
        <Col md={1}>
          GALLERY
        <Col>
      </Row>
     );
}
};

export default withRouter(Navbar);
