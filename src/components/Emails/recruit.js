import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import './recruit.scss';

class Recruit extends Component {
  render() {
    return(
      <Row className="recruit">
        <Col className="name" xs={4}>
          {this.props.info.first + ' ' + this.props.info.last}
        </Col>
        <Col className="email" xs={4}>
          {this.props.info.email}
        </Col>
        <Col className="phone" xs={4}>
          {this.props.info.phone}
        </Col>
      </Row>
    );
  }
}

export default Recruit;