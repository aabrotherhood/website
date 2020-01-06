import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../aab_logo.svg';
import {Row, Col} from 'react-bootstrap';
import './styles.scss';

class Navbar extends Component {
  render () {
    return (
      <Row>
        <Col>
          <Logo></Logo>
        </Col>
        <div className="wordsInLine">
          <Col md={{offset : 5}}>
            ABOUT
          </Col>
          <Col>
            MEMBERS
          </Col>
          <Col>
            CONTACT
          </Col>
          <Col>
            GALLERY
          </Col>
        </div>
      </Row>
     );
  }
};

export default Navbar;
