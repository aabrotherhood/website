import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import { Link as SLink } from 'react-scroll';
import {Row} from 'react-bootstrap';
import AABLogo from '../../assets/aab_logo.svg';
import Img from 'react-image';
import Preloader from '../Preloader';
import * as ROUTES from '../../constants/routes';
import './styles.scss';

class TopBar extends Component {
  render() {
    return (
      <Row className="homeNavbar">
        <Img loader={<Preloader/>} src={AABLogo} alt="logo"/>
        {this.props.loggedIn === "true" ? 
          <ul className="listInline">
            <li className="listInlineList">
              <Link className="link" to={ROUTES.HOME}>Home</Link>
            </li> 
            <li className="listInlineList">
              <Link className="link" to={ROUTES.MEMBERS}>Brothers</Link>
            </li>
            <li className="listInlineList"> 
              <Link className="link" to={ROUTES.RECRUITMENT}>Recruits</Link>
            </li>
            <li className="listInlineList"> 
              <Link className="link" to={ROUTES.RECRUITMENTCOMMENTS}>Comment</Link>
            </li>
          </ul> :
          <ul className="listInline">
            <li className="listInlineList">
            <SLink 
              to="mission" 
              spy={true} 
              smooth={true} 
              duration={500} >About</SLink>
            </li> 
            <li className="listInlineList">
              <SLink 
              to="contact" 
              spy={true} 
              smooth={true} 
              duration={500} >Contact</SLink>
            </li>
            <li className="listInlineList"> 
              <Link className="link" to={ROUTES.MEMBERS}>Members</Link>
            </li>
        </ul> }
    </Row>
    );
  }
}

export default withRouter(TopBar);