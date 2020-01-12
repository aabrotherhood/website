import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import './styles.scss';

class Mission extends Component {
  render() {
    return (
      <Col className="mission">
        <p className="missionTitle">Our Mission</p>
        <p className="missionDetails">AAB is built on three pillars: service, brotherhood, and activism.</p>
      </Col>
    );
  }
}

export default Mission;