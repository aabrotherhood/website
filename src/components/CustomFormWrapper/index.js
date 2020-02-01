import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import CustomForm from '../CustomForm/index';
import {FirebaseContext} from '../Firebase';
import Logo from '../../assets/aab_logo.svg';
import Img from 'react-image';
import Preloader from '../Preloader/index';
import './styles.scss';

class Signup extends Component {

  render() {
    return( 
      <Col className='customFormWrapper'>
        <Row className='justify-content-center'>
          <Img className='navbarLogo' src={Logo} loader={<Preloader/>} alt='AAB logo'/>
        </Row>
          <FirebaseContext.Consumer>
            {firebase => <CustomForm type={this.props.type} firebase={firebase} />}
          </FirebaseContext.Consumer>
      </Col>
    );
  }
};

export default Signup;

