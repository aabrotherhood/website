import React, {Component} from 'react';
import { Col} from 'react-bootstrap';
import CustomForm from '../CustomForm/index';
import {FirebaseContext} from '../Firebase';
import './styles.scss';

class Signup extends Component {

  render() {
    return( 
      <Col className='customFormWrapper'>
          <FirebaseContext.Consumer>
            {firebase => <CustomForm type={this.props.type} firebase={firebase} />}
          </FirebaseContext.Consumer>
      </Col>
    );
  }
};

export default Signup;

