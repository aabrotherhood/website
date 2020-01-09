import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Img from 'react-image';
import Preloader from '../Preloader/index';
import Serv2 from '../../assets/serv2.jpg';
import Stripes from '../../assets/stripes.png';
import './styles.scss';

class Service extends Component {
	render () {
		return (
			<Col className="servCol">
				{/* <Img className='serv1' src={Serv1} loader={<Preloader/>} alt='Family Meals' /> */}
				<Img className='serv2' src={Serv2} loader={<Preloader/>} alt='Community Service' />
				<Img className='stripes' src={Stripes} loader={<Preloader/>} />
				<Col className='servText'>
					<div className='redBox'>
						<p className='servTitle'>Service</p>
						<p className='servDetails'>
							AAB is committed to working with any and all groups who wish to create a more vibrant community based on civic participation and collaborative partnerships.
						</p>
					</div>
				</Col>
			</Col>
		);
	}
};

export default Service;