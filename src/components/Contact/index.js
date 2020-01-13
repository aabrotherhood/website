import React, {Component} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import Img from 'react-image';
import Preloader from '../Preloader/index';
import ContactBg from '../../assets/contact-bg.png';
import './styles.scss';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state ={
			first: '',
			last: '',
			email:'',
			subject: '',
			message: '',
		};

    this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(change, event) {
		switch (change) {
			case 'first':
				this.setState({first: event.target.value});
				break;
			case 'last':
				this.setState({last: event.target.value});
				break;
			case 'email':
				this.setState({email: event.target.value});
				break;
			case 'subject':
				this.setState({subject: event.target.value});
				break;
			case 'message':
				this.setState({message: event.target.value});
				break;
			default: 
				console.log('something messed up');
				break;

		}
  }

  handleSubmit(event) {
		// to access the state, do this.state.first for first name and etc. 
    event.preventDefault();
  }

	render () {
		return (
			<Container className='contact'>
				<Img className='contactBg' src={ContactBg} loader={<Preloader/>} />
				<Form className='contactForm'>
					<p className='contactTitle'>
						INTERESTED IN JOINING?
					</p>
					<p className='contactText'>
						For more information about how you can get involved, email aa.brotherhood@gmail.com.
					</p>
					<Row>
						<Col>
							<Form.Group controlId='formGroupFirst'>
								<Form.Label>First name</Form.Label>
								<Form.Control size='sm' onChange={this.handleChange.bind(this, 'first')}/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group controlId='formGroupLast'>
								<Form.Label>Last name</Form.Label>
								<Form.Control size='sm' onChange={this.handleChange.bind(this, 'last')}/>
							</Form.Group>
						</Col>
					</Row>
					<Form.Group controlId='formGroupEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' size='sm' onChange={this.handleChange.bind(this, 'email')}/>
					</Form.Group>
					<Form.Group controlId='formGroupSub'>
						<Form.Label>Subject</Form.Label>
						<Form.Control size='sm' onChange={this.handleChange.bind(this, 'subject')}/>
					</Form.Group>
					<Form.Group controlId='formGroupMessage'>
						<Form.Label>Message</Form.Label>
						<Form.Control as='textarea' rows='3' size='sm' onChange={this.handleChange.bind(this, 'message')}/>
					</Form.Group>
					<Button className='send' variant='outline-dark'>
						Send
					</Button>
				</Form>
			</Container>
		);
	}
};

export default Contact;