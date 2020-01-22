import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import {Container} from 'react-bootstrap';
import Brothers from '../Brothers';
import './styles.scss';

class Members extends Component {
  render() {
    return( 
      <div className="members">
        <Brothers/>
      </div>
    )
  }
}

export default (Members);