import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Mail from '../../assets/mail.svg';
import './styles.scss';

class Footer extends Component {

	render () {
		return (
			<Col className="footer">
				<a href="mailto:aa.brotherhood@gmail.com" className="mailLink">
					<img src={Mail} alt="mail svg" className="mailSVG"></img>
				</a>
				<p className="final">AAB | All Rights Reserved</p>
			</Col>
		);
	}
};

export default Footer;