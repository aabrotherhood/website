import React, {Component} from 'react';
import Navbar from '../Navbar/index';
import {Container} from 'react-bootstrap';
import HomeHero from '../HomeHero/index';
import Mission from'../Mission/index';
import Brotherhood from '../Brotherhood/index';
import Activism from '../Activism/index';
import Service from '../Service/index';
import '../../styles/global.scss';
import './styles.scss';

class App extends Component {
  render () {
  return (
    <Container className="App">
      <Navbar/> 
      <HomeHero/>
      <Mission />
      <Brotherhood/>
      <Activism/>
      <div className="spacer"></div>
      <Service name="about"/>
    </Container>
  );
}
}

export default App;
