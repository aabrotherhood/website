import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../aabT.svg';
import {Row, Col} from 'react-bootstrap';
import './styles.scss';

class NavBar extends Compenent {
  render () {
    return (
      <Row>
        <Col>
          
        <\Col>
      </Row>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
