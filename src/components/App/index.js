import React from 'react';
import {Container} from 'react-bootstrap';
import HomeHero from '../HomeHero/index';
import '../../styles/global.scss';
import './styles.scss';

function App() {
  return (
    <Container className="App">
      <HomeHero/>
    </Container>
  );
}

export default App;
