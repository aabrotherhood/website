import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {withFirebase} from '../Firebase/context';
import {Row,Col} from 'react-bootstrap';
import * as ROUTES from '../../constants/routes';
import './styles.scss';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.firebase.doSignOut();
    this.props.history.push('/login');
  }

  render() {
    return (
      <Row className="homeNavbar">
        <Col xs={2} className="justify-content-start alignStart">
          <p className="logo">AAB</p>
        </Col>
        {this.props.loggedIn ? 
          <Row className="listInline">
            <li className="listInlineList">
              <Link className="link" to={ROUTES.LANDING}>Home</Link>
            </li> 
            <li className="listInlineList">
              <Link className="link" to={ROUTES.MEMBERS}>Brothers</Link>
            </li>
            <li className="listInlineList">
              <Link className="link" to={ROUTES.RECRUITMENT}>Recruits</Link>
            </li>  */
            <li className="listInlineList">
              <Link className="link" to={ROUTES.RECRUITMENTCOMMENTS}>Comment</Link>
            </li> 
            {/* <li className="listInlineList">
              <Link className="link" to={ROUTES.MEALS}>Meals</Link>
            </li>  */}
            <li className="listInlineList">
              <Link className="link" to={ROUTES.EDIT}>Edit</Link>
            </li> 
            <li className="listInlineList">
              <p className="link" onClick={this.handleLogout}>Logout</p>
            </li>
          </Row> :
          <Row className="listInline">
            <li className="listInlineList ">
              <Link className="link" to={ROUTES.LANDING}>Home</Link>
            </li>
            <li className="listInlineList">
              <Link className="link" to={ROUTES.MEMBERS}>Members</Link>
            </li>
            <li className="listInlineList">
              <Link className="link" to={ROUTES.LOGIN}>Login</Link>
            </li>
        </Row> }
    </Row>
    );
  }
}

export default withFirebase(withRouter(TopBar));