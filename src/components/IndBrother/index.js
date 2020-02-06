import React, {Component} from 'react';
import {Col,Row} from 'react-bootstrap';
import './styles.scss';

class IndBrother extends Component {
  constructor(props) {
    super(props);

    this.data = JSON.parse(this.props.history.location.state.data);

  }
  render() {
    const brotherImage = {
      backgroundImage: 'url(' + this.data.imageURL + ')',
      paddingTop: '40%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      marginBottom: '2rem',
    }
    return(
      <Col className="indBrother justify-content-center">
        <Row className="infoBox">
          <div className="brotherImage" style={brotherImage}></div>
          <div className="infoDetails">
            <p className="name">{this.data.first + ' ' + this.data.last}</p>
            <p className="year">{this.data.year}</p>
            <p className="house">{this.data.house}</p>
            <p className="brotherName">{this.data.brotherName}</p>
            <p className="birthday">{this.data.birthday}</p>
            <p className="occupation">{this.data.occupation}</p>
            <p className="location">{this.data.location}</p>
            <p className="concentration">{this.data.concentration}</p>
            <p className="personalEmail">{this.data.personalEmail}</p>
            <p className="schoolEmail">{this.data.schoolEmail}</p>
            <p className="phone">{this.data.phone}</p>
          </div>
        </Row>
      </Col>
    );
  }
}

export default IndBrother;