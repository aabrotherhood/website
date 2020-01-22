import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import {Container} from 'react-bootstrap';
import Brothers from '../Brothers';
import Navbar from '../Navbar/index';
import './styles.scss';

class Members extends Component {
  render() {
    return( 
    <Container>
    	<Navbar/>
    	<div className="members">
    		<Brothers/>
    	</div>
    </Container>
    )
  }
}

export default (Members);