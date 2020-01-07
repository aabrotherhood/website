import React, {Component} from 'react';
import logo from '../../logo.svg';
import Navbar from '../Navbar/index';
import {Container} from 'react-bootstrap';
import HomeHero from '../HomeHero/index';
import Mission from'../Mission/index';
import '../../styles/global.scss';
import './styles.scss';

class App extends Component {
  render () {
  return (
    <Container className="App">
      <Navbar/>
     <HomeHero/>
     <Mission/>
    </Container>
  );
}
}

export default App;
