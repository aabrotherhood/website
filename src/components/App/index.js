import React, {Component} from 'react';
import Navbar from '../Navbar/index';
import {Container} from 'react-bootstrap';
import HomeHero from '../HomeHero/index';
import Mission from'../Mission/index';
import Brotherhood from '../Brotherhood/index';
import Activism from '../Activism/index';
import Service from '../Service/index';
<<<<<<< HEAD
import Contact from '../Contact/index';
=======
>>>>>>> 90f52f6971fb7e5a82a2c5a2d5c701f137221a34
import '../../styles/global.scss';
import './styles.scss';

class App extends Component {
  render () {
  return (
    <Container className="App">
      <Navbar/> 
      <HomeHero/>
      <Mission/>
      <Brotherhood/>
      <Activism/>
      <div className="spacer"></div>
      <Service/>
<<<<<<< HEAD
      <Contact/>
=======
>>>>>>> 90f52f6971fb7e5a82a2c5a2d5c701f137221a34
    </Container>
  );
}
}

export default App;
