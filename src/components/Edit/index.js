import React, {Component} from 'react';
import {Col, Form, InputGroup, Button} from 'react-bootstrap';
import {withAuthorization} from '../Sessions';
import './styles.scss';

class Edit extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      first:'', 
      last: '', 
      brotherName: '',
      birthday: '',
      house: '',
      year: '',
      concentration: '',
      location: '',
      occupation: '',
      phone: '',
      personalEmail: this.props.firebase.currentUser().email,
      schoolEmail: '',
      image: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const currentBrotherRef = this.props.firebase.currentBrotherImage(this.props.firebase.currentUser().uid);
    currentBrotherRef.put(this.state.image).then(() => {
      console.log('Successfully loaded image');
      currentBrotherRef.getDownloadURL().then(imageURL=> {
        const currentBrother = this.props.firebase.brother(this.props.firebase.currentUser().uid);
        const {first, last, brotherName, birthday, house, year, concentration, location, occupation, phone, personalEmail, schoolEmail} = this.state;
        currentBrother.set({
          first,last,brotherName,birthday, house, year, 
          concentration, location, occupation, 
          phone, personalEmail, schoolEmail, imageURL}
          ,function(error) {
            if (error) {
              // The write failed...
              console.log('Failed updated brother info');
            } else {
              // Data saved successfully!
              console.log('Succesfully updated information');
              this.props.history.push('/home')
            }
          })
      })
    }).catch(err => {
      console.log('ERROR', err);
    })
   
  }
  handleChange(event) {
    if (event.target.files) {
      const image = event.target.files[0];
      this.setState({image: image }, () => {console.log('set image')});
    } else {
      this.setState({[event.target.name]: event.target.value});
    }
  }

  render() {
    return( 
      <Form noValidate onSubmit={this.handleSubmit} className="customForm">
        <Form.Row>
          <Form.Group as={Col} md="12">
            <InputGroup>
              <Form.Control
                type="file"
                name="image"
                onChange={this.handleChange}
                className="formImage"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your brother name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row> 
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
            <Form.Label>Second</Form.Label>
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
          <Form.Group as={Col} md="12">
            <Form.Label>Brother Name</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Snow"
                name="brotherName"
                onChange={this.handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your first name.
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
          <Form.Group as={Col} md="6">
            <Form.Label>Birthday</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="04/24/1998"
                name="birthday"
                onChange={this.handleChange}
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Location</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Boston"
                name="location"
                onChange={this.handleChange}
                required
              />
            </InputGroup>
          </Form.Group>
        </Form.Row> 
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label>Concentration</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="VES"
                name="concentration"
                onChange={this.handleChange}
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Occupation</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Student"
                name="occupation"
                onChange={this.handleChange}
                required
              />
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
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Edit);