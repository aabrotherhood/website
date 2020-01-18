import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import Brothers from '../Brothers';

class Home extends Component {
  render() {
    return( 
      <div>
        <Brothers/>
      </div>
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);