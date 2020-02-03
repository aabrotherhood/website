import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import './styles.scss';

class Mission extends Component {
  render() {
    return (
      <Col className="mission justify-content-center" xs={10}>
        <p className="missionTitle">Mission</p>
        <p className="missionDetails">
          We, the brothers of the Asian American Brotherhood, 
          have united ourselves in order to forge a stronger 
          sense of unity among Asian Americans in our community 
          and to foster solidarity without coercion. In promoting 
          understanding and bonds across ethnic lines, the Asian 
          American Brotherhood seeks to empower both our members 
          and the communities that we serve.
        </p>
      </Col>
    );
  }
}

export default Mission;