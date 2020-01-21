import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import Brothers from '../Brothers';
import './styles.scss';

class Home extends Component {
  render() {
    return( 
      <div className="members">
        <Brothers/>
      </div>
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);