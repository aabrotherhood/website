import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';

class Edit extends Component {
  render() {
    return( 
      <div>Edit</div>
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Edit);