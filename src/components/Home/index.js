import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';

class Home extends Component {
  render() {
    return( 
      <div>HOME</div>
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);