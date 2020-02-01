import React, {Component} from 'react';
import TopBar from '../TopBar/index';
import {Container} from 'react-bootstrap';
import HomeHero from '../HomeHero/index';
import Mission from'../Mission/index';
import Brotherhood from '../Brotherhood/index';
import Activism from '../Activism/index';
import Service from '../Service/index';
import Contact from '../Contact';
import '../../styles/global.scss';
import './styles.scss';

class App extends Component {
  render () {
  return (
    <Container className="Landing">
      <TopBar loggedIn="false"/> 
      <HomeHero/>
      <Mission />
      <Brotherhood/>
      <Activism/>
      <div className="spacer"></div>
      <Service name="about"/>
      <Contact/>
    </Container>
  );
}
}

export default App;
