import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {Parallax} from 'react-parallax';
import './styles.scss';

class HomeHero extends Component {
  render() {
    const fontSize = {
      fontSize: this.props.fontSize
    }
     return (
        <Col className="homeCol">
          <Parallax
          className="homeHeroPic"
            bgImage={this.props.image} 
            bgImageAlt="2019 group"
            strength={400}>
              <p className="homeLogo" style={fontSize}>{this.props.text}</p>
            </Parallax>
        </Col>
     );
  }
};

export default HomeHero;