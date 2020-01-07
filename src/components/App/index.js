import React from 'react';
import {Container} from 'react-bootstrap';
import HomeHero from '../HomeHero/index';
import Mission from'../Mission/index';
import '../../styles/global.scss';
import './styles.scss';

function App() {
  return (
    <Container className="App">
     <HomeHero/>
     <Mission/>
    </Container>
  );
}

export default App;
