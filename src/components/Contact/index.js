import React, {Component} from 'react';
import './styles.scss';
/*
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import ContactBg from '../../assets/contact-bg.png';
require('dotenv').config()
const nodemailer = require('nodemailer'); */

class Contact extends Component {
	/* constructor(props) {
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
		let transporter = nodemailer.createTransport({
			service: gmail,
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASSWORD
			}
		});

		let mailOptions = {
			from = this.state.first, ' ', this.state.last, ' <', this.state.email, '>',
			to = 'aa.brotherhood@gmail.com',
			subject = this.state.subject,
			text = this.state.message
		}

	transporter.sendMail(mailOptions, function(err, data) {
		if (err) {
			console.log("Error sending email.");
		}
		else {
			console.log("Email sent.");
		}
	})
    event.preventDefault();
  } */

	render () {
		return (
			<div className='contact'>
				<p className='contactTitle'>
						INTERESTED IN JOINING?
					</p>
					<p className='contactText'>
						For more information about how you can get involved, email 
						<p className='email'>
						<a href="mailto:aa.brotherhood@gmail.com" target="_top">aa.brotherhood@gmail.com
					    </a>.
					    </p>
					</p>
			</div>
		);
	}
};

export default Contact;