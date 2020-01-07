import React, {Component} from 'react';
import logo from '../../logo.svg';
import Navbar from '../Navbar/index';
import {Container} from 'react-bootstrap';
import HomeHero from '../HomeHero/index';
import '../../styles/global.scss';
import './styles.scss';

class App extends Component {
  render () {
  return (
    <Container className="App">
      <Navbar/>
     <HomeHero/>
    </Container>
  );
}
}

export default App;
