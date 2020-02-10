import React, {Component} from 'react';
import {Col, Form, InputGroup, Button, Row} from 'react-bootstrap';
import Logo from '../../assets/aab_logo.svg';
import Img from 'react-image';
import Preloader from '../Preloader/index';

class RecruitmentSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first:'', 
      last: '', 
      house: '',
      year: '',
      phone: '',
      personalEmail: '',
      schoolEmail: '',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/aab-website-754b0.appspot.com/o/brothers%2Faab.png?alt=media&token=459771fb-0788-4f19-912a-ad3cfbc6de3f',
    }

    this.initialState = this.state

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  resetForm() {
    this.setState(this.initialState);
    window.location.reload(false);
  }
  handleSubmit(event) {
    event.preventDefault();

    const recruitUID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const currentRecruit = this.props.firebase.recruit(recruitUID);
    const {first, last, house, year, phone, personalEmail, schoolEmail, imageURL} = this.state
    currentRecruit.set({
      first, last, house, year, phone,personalEmail, schoolEmail, imageURL
    }, function(error) {
      if (error) {
        console.log('something went wrong',error);
      } else {
        console.log('registered new recruit');
      }
    })
    this.resetForm();
   
  }
  handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return( 
      <Col>
        <Row className='justify-content-center'>
          <Img className='navbarLogo' src={Logo} loader={<Preloader/>} alt='AAB logo'/>
        </Row>
        <Form noValidate onSubmit={this.handleSubmit} className="customForm">
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>First</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="First"
                  name="first"
                  onChange={this.handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your brother name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Last</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Last"
                  name="last"
                  onChange={this.handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your last name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row> 
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>House</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Dunster"
                  name="house"
                  onChange={this.handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  What house were/are you in?
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Year (format: 2020)</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="2020"
                  name="year"
                  onChange={this.handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  What year did/will you graduate?
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row> 
          
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Personal Email</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  defaultValue={this.state.personalEmail}
                  name="personalEmail"
                  onChange={this.handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter proper email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>School Email</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="schoolEmail"
                  onChange={this.handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter proper email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Phone</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="xxx-xxx-xxxx"
                  aria-describedby="inputGroupPrepend"
                  name="phone"
                  onChange={this.handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Phone Number.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Button className="customButton" type="submit">Save</Button>
        </Form>
      </Col>
    )
  }
}



export default RecruitmentSignUp;