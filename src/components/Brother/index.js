import React, {Component} from 'react';
import Img from 'react-image';
import Preloader from '../Preloader';
import {Col} from 'react-bootstrap';

class Brother extends Component {
  render() {
    return (
      <Col className="brother">
        <Img className="brotherImage" src={this.props.info.imageURL} loader={<Preloader/>} alt={this.props.info.first}/>
        <h2 className="realName">{this.props.info.first + ' ' + this.props.info.last}</h2>
        <p className="brotherName">{this.props.info.brotherName}</p>
        <p className="birthday">{this.props.info.birthday}</p>
        <p className="occupation">{this.props.info.occupation}</p>
        <p className="location">{this.props.info.location}</p>
        <p className="house">{this.props.info.house}</p>
        <p className="year">{this.props.info.year}</p>
        <p className="concentration">{this.props.info.concentration}</p>
        <p className="personalEmail">{this.props.info.personalEmail}</p>
        <p className="schoolEmail">{this.props.info.schoolEmail}</p>
        <p className="phone">{this.props.info.phone}</p>
      </Col>
    );
  }
}

export default Brother;