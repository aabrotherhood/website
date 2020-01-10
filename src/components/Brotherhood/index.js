import React, {Component} from 'react';
import Img from 'react-image';
import {Col} from 'react-bootstrap';
import Preloader from '../Preloader/index';
import Bro1 from '../../assets/bro1.jpg';
import Bro2 from '../../assets/bro2.jpg';
import Stripes from '../../assets/stripes.png';
import './styles.scss';

class Brotherhood extends Component {
	render () {
		return (
			<Col className="broCol">
				<Img className='bro1' src={Bro1} loader={<Preloader/>} alt='2018 Name Day'/>
				<Img className='stripes' src={Stripes} loader={<Preloader/>} />
				<Img className='bro2' src={Bro2} loader={<Preloader/>} alt='2018 Senior Retreat'/>
					<Col className='brotherhoodText'>
						<p className='brotherhoodTitle'>Brotherhood</p>
						<p className='brotherhoodDetails'>
							Our close-knit membership provides every member the opportunity to be an active and contributing force within the organization.
						</p>
					</Col>
			</Col>
		);
	}
};

export default Brotherhood;