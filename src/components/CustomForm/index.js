import React, {Component} from 'react';
import {Form, Col, InputGroup, Button} from 'react-bootstrap';
import {withRouter, Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Loading from '../../assets/loading.gif';

import './styles.scss';

class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: '',
      email: 'example@gmail.com',
      passwordOne: '',
      passwordTwo: '',
      passwordValid: false,
      loading: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.check !== 'P01nd3@vlquin*cy(&' && this.props.type === 'Sign Up') {
      alert('Answer to security question is incorrect');
      return
    }
    this.setState({loading: true});
    const personalEmail = this.state.email;
    
    if (this.state.email !== '') {
      console.log('everything is good to go!');
      if (this.props.type === 'Sign Up') {
        if (this.state.passwordOne !== this.state.passwordTwo) {
          this.setState({passwordValid: true})
          alert('Passwords don\'t match!');
          window.location.reload(false);
          return
        }
        this.setState({passwordValid: false})
        this.props.firebase.doCreateUserWithEmailAndPassword(this.state.email, this.state.passwordOne)
        .then(authUser => {
          return this.props.firebase
          .brother(authUser.user.uid)
          .set({
            personalEmail
          });
        })
        .then(() => {
          console.log("success signing up!");
          this.props.history.push({pathname:'/edit', state:{email: this.state.email}});
        }).catch(err => {
          console.log('ERROR',err);
        });
      } else {
        this.props.firebase.doSignInWithEmailAndPassword(this.state.email, this.state.passwordOne) 
        .then(() => {
          console.log("success logging in!");
          this.props.history.push('/home');
        }).catch (err => {
          console.log('ERROR', err);
          alert('Passwords or email not correct');
          window.location.reload(false);
        })
      }
    }
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {

    return (
      <Form noValidate onSubmit={this.handleSubmit} className="customForm">
        {this.state.loading ?
        <div className="loading">
          <img src={Loading} alt="loading gif" className="spinner"/>
        </div> : <div></div>}
        {this.props.type === 'Sign Up' ? 
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <Form.Label>Where are check ins held?</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Answer"
                isInvalid={this.state.check === ''}
                name="check"
                onChange={this.handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                (All lowercase).
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row> : <div></div> }
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername03">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Email@gmail.com"
                isInvalid={this.state.email === ''}
                name="email"
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
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              name="passwordOne" 
              onChange={this.handleChange} 
              type="password" 
              placeholder="Password" 
              isInvalid={this.state.passwordValid}
              required />
          </Form.Group>
        </Form.Row>
        {this.props.type === 'Sign Up' ? 
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              name="passwordTwo" 
              onChange={this.handleChange} 
              type="password" 
              placeholder="Password" 
              isInvalid={this.state.passwordValid}
              required />
          </Form.Group>
        </Form.Row>
        : <div></div> }
        {this.props.type !== 'Sign Up' ? 
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Link to={ROUTES.SIGNUP}>Sign up here</Link>
          </Form.Group>
        </Form.Row>
        : <div></div> }
        <Button className="customButton" type="submit">{this.props.type}</Button>
      </Form>
    );
  }
}

export default withRouter(CustomForm);