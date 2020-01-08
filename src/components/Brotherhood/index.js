import React, {Component} from 'react';
import Img from 'react-image';
import {Col, Row} from 'react-bootstrap';
import Preloader from '../Preloader/index';
import Bro1 from '../../assets/bro1.jpg';
import Bro2 from '../../assets/bro2.jpg';
import Stripes from '../../assets/stripes.png';
import './styles.scss';

class Brotherhood extends Component {
	render () {
		return (
			<Col className="broCol">
				<Row>
					<Img className='bro1' src={Bro1} loader={<Preloader/>} alt='Brotherhood_1'/>
				</Row>
				<Row className='justify-content-end'>
					<Col>
						<Img className='stripes' src={Stripes} loader={<Preloader/>} />
					</Col>
					<Col>
						<Img className='bro2' src={Bro2} loader={<Preloader/>} />
					</Col>
					<Col className='brotherhoodText'>
						<p className='brotherhoodTitle'>BROTHERHOOD</p>
						<p className='brotherhoodDetails'>
							Our close-knit membership provides every member the opportunity to be an active and contributing force within the organization.
						</p>
					</Col>
				</Row>
			</Col>
		);
	}
};

export default Brotherhood;