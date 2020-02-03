import React, {Component} from 'react';
import {Col,Row} from 'react-bootstrap';
import TopBar from '../TopBar';
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
        <TopBar loggedIn="false"/>
        <Row className="infoBox">
          <div className="brotherImage" style={brotherImage}></div>
          <div className="infoDetails">
            <p className="name">{this.data.first + ' ' + this.data.last}</p>
            <p className="year">{this.data.year}</p>
          </div>
        </Row>
      </Col>
    );
  }
}

export default IndBrother;