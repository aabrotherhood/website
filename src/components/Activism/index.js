import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Img from 'react-image';
import Preloader from '../Preloader/index';
import Act1 from '../../assets/activism.jpg';
import GreyBox from '../../assets/greybox.png';
import './styles.scss';

class Activism extends Component {
	render () {
		return (
			<Row className='actRow'>
				<Col className='actText'>
					<p className='actTitle'>
						ACTIVISM
					</p>
					<p className='actDetails'>
						AAB hopes to inspire a new generation of Asian American leaders, culminating in Reflections, an end-of-year celebration of graduating seniors who have made significant contributions to the Asian American community.
					</p>
				</Col>
				<Col>
					<Img className='activism' src={Act1} loader={<Preloader/>} alt='2018 Reflections'/>
				</Col>
				<Col>
					<Img className='greybox' src={GreyBox} loader={<Preloader/>} />
				</Col> 
			</Row>
		);
	}
};

export default Activism;