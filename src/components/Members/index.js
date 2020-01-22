import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import {Container} from 'react-bootstrap';
import Brothers from '../Brothers';
import './styles.scss';

class Members extends Component {
  render() {
    return( 
    	<Container>
    		<div>
        		<Brothers className='members'/>
    		</div>
    	</Container>
    )
  }
}

export default (Members);