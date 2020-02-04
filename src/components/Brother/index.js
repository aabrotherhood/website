import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import Loading from '../../assets/loading.gif';


class Brother extends Component {
  constructor(props) {
    super(props);

    this.state = {loaded: false};
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded() {
    this.setState({loaded: true})
  }
  render() {
    const brotherImage = {
      backgroundImage: 'url(' + this.props.info.imageURL + ')',
      paddingTop: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
    const imageLoading = {
      display: 'none',
    }
    const loadingGif = {
      width: '75px',
      height: '75px'
    }
    return (
      <Col onClick={() => this.props.history.push(this.props.nextURL, {data:JSON.stringify(this.props.info)})} xs={3} className="brother">
        <img src={this.props.info.imageURL} onLoad={this.handleImageLoaded} alt="bro" style={imageLoading}/>
        {this.state.loaded ?<div className="brotherImage" style={brotherImage}></div> :
          <div className="brotherImage" style={loadingGif}><img src={Loading} alt="loading"/></div> }
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