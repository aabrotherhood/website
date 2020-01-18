import React, {Component} from 'react';
import Img from 'react-image';
import Preloader from '../Preloader';
import {Col} from 'react-bootstrap';

class Brother extends Component {
  render() {
    return (
      <Col>
        <Img src={this.props.info.imageURL} loader={<Preloader/>} alt={this.props.info.first}/>
        <h2>{this.props.info.first + ' ' + this.props.info.last}</h2>
        <p>{this.props.info.brotherName}</p>
        <p>{this.props.info.birthday}</p>
        <p>{this.props.info.occupation}</p>
        <p>{this.props.info.location}</p>
        <p>{this.props.info.house}</p>
        <p>{this.props.info.year}</p>
        <p>{this.props.info.concentration}</p>
        <p>{this.props.info.personalEmail}</p>
        <p>{this.props.info.schoolEmail}</p>
      </Col>
    );
  }
}

export default Brother;