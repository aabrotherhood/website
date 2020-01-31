import React, {Component} from 'react';
import './styles.scss';

class Contact extends Component {

	render () {
		return (
			<div className='contact'>
				<p className='contactTitle'>
						INTERESTED IN JOINING?
					</p>
					<p className='contactText'>
						For more information about how you can get involved, email 
						<span className='email'>
						<a href="mailto:aa.brotherhood@gmail.com" target="_top"> aa.brotherhood@gmail.com
					    </a>.
					    </span>
					</p>
			</div>
		);
	}
};

export default Contact;