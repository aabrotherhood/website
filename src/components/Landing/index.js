import React, {Component} from 'react';
import TopBar from '../TopBar/index';
import {Container} from 'react-bootstrap';
import HomeHero from '../HomeHero/index';
import Mission from'../Mission/index';
import Pillars from '../Pillars';
import HomeHeroPic from '../../assets/homeHero.jpeg';
import Bro1 from '../../assets/serv1.jpeg';
import Serve from '../../assets/serv2.jpeg';
import Footer from '../Footer';
import '../../styles/global.scss';
import './styles.scss';

class App extends Component {
  render () {
  return (
    <Container className="Landing" fluid={true}>
      <TopBar loggedIn="false"/> 
      <HomeHero fontSize="90px" image={HomeHeroPic} text="Asian American Brotherhood"/>
      <Mission />
      <HomeHero fontSize="70px" image={Serve} 
      text="AAB is commited to serving our community."
      />
      <Pillars/>
      <HomeHero fontSize="70px" image={Bro1} 
      text="Our close-knit membership
      provides every member the 
      opportunity to be an active 
      and contributing force within 
      the organization."
      />
      <Footer/>
    </Container>
  );
}
}

export default App;
