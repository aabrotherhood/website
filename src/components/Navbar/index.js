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
          <Link className="link" to="/"><Logo></Logo></Link>
        </Col>
        <Col md={{ span : 1, offset : 3}}>
          <Link className = "link" to="/">ABOUT</Link>
        </Col>
        <Col md={1}>
          <Link className = "link" to="/">MEMBERS</Link>
        </Col>
        <Col md={1}>
          <Link className = "link" to="/">CONTACT</Link>
        </Col>
        <Col md={1}>
          <Link className = "link" to="/">GALLERY</Link>
        </Col>
      </Row>
     );
}
};

export default Navbar;
