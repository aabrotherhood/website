import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Img from 'react-image';
import Preloader from '../Preloader/index';
import Serv1 from '../../assets/serv1.jpg';
import Serv2 from '../../assets/serv2.jpg';
import GoldBox from '../../assets/goldbox.png';
import './styles.scss';

class Service extends Component {
	render () {
		return (
			<Container>
				<Img className='serv1' src={Serv1} loader={<Preloader/>} alt='Family Meals' />
				<Img className='serv2' src={Serv2} loader={<Preloader/>} alt='Community Service' />
				<Img className='goldBox' src={GoldBox} loader={<Preloader/>} />
				<div className='servText'>
					<p className='servTitle'>SERVICE</p>
					<p className='servDetails'>
						AAB is committed to working with any and all groups who wish to create a more vibrant community based on civic participation and collaborative partnerships.
					</p>
				</div>
			</Container>
		);
	}
};

export default Service;