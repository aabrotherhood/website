import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {withFirebase} from '../Firebase/context';
import {Row,Col} from 'react-bootstrap';
import * as ROUTES from '../../constants/routes';
import './styles.scss';

class TopBar extends Component {
  render() {
    return (
      <Row className="homeNavbar">
        <Col xs={2} className="justify-content-start alignStart">
          <p className="logo">AAB</p>
        </Col>
        {this.props.loggedIn === "true" ? 
          <ul className="listInline">
            <li className="listInlineList">
              <p className="link" onClick={this.props.firebase.doSignOut}>Logout</p>
            </li>
            <li className="listInlineList">
              <Link className="link" to={ROUTES.RECRUITMENTCOMMENTS}>Comment</Link>
            </li> 
            <li className="listInlineList">
              <Link className="link" to={ROUTES.MEMBERS}>Brothers</Link>
            </li>
            <li className="listInlineList">
              <Link className="link" to={ROUTES.RECRUITMENT}>Recruits</Link>
            </li> 
            <li className="listInlineList">
              <Link className="link" to={ROUTES.LANDING}>Home</Link>
            </li> 
          </ul> :
          <ul className="listInline">
            <li className="listInlineList">
              <Link className="link" to={ROUTES.LOGIN}>Login</Link>
            </li>
            <li className="listInlineList">
              <Link className="link" to={ROUTES.MEMBERS}>Members</Link>
            </li>
            <li className="listInlineList ">
              <Link className="link" to={ROUTES.LANDING}>Home</Link>
            </li>
        </ul> }
    </Row>
    );
  }
}

export default withFirebase(withRouter(TopBar));