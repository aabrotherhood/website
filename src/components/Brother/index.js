import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';


class Brother extends Component {
  render() {
    const brotherImage = {
      backgroundImage: 'url(' + this.props.info.imageURL + ')',
      paddingTop: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
    return (
      <Col onClick={() => this.props.history.push('/brother/' + this.props.info.first + this.props.info.last, {data:JSON.stringify(this.props.info)})} xs={3} className="brother">
        <div className="brotherImage" style={brotherImage}></div>
        {/* <Img className="brotherImage" src={this.props.info.imageURL} loader={<Preloader/>} alt={this.props.info.first}/> */}
        <div className="brotherInfo">
          <h2 className="realName">{this.props.info.first + ' ' + this.props.info.last}</h2>
          <p className="brotherName">{this.props.info.brotherName}</p>
          <p className="birthday">{this.props.info.birthday}</p>
          <p className="occupation">{this.props.info.occupation}</p>
          <p className="location">{this.props.info.location}</p>
          <p className="house">{this.props.info.house}</p>
          <p className="gradYear">{this.props.info.year}</p>
          <p className="concentration">{this.props.info.concentration}</p>
          <p className="personalEmail">{this.props.info.personalEmail}</p>
          <p className="schoolEmail">{this.props.info.schoolEmail}</p>
          <p className="phone">{this.props.info.phone}</p>
        </div>
      </Col>
    );
  }
}

export default withRouter(Brother);