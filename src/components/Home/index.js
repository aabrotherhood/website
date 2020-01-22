import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import Brothers from '../Brothers';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles.scss';

class Home extends Component {
  render() {
    return( 
      <Col  className="home">
        <Row className="homeNavbar">
          <ul className="listInline">
            <li className="listInlineList">
              <Link className="link" to="/home">Home</Link>
            </li>
            <li className="listInlineList">
              <Link className="link" to="/members">Brothers</Link>
            </li>
            <li className="listInlineList"> 
              <Link className="link" to="/recruitment">Recruitment</Link>
            </li>
          </ul>
        </Row>
        <Row>
          <Brothers/>
          <iframe title="AABCalendar" key="aabCalendar" src="https://calendar.google.com/calendar/embed?src=aa.brotherhood%40gmail.com&ctz=America%2FNew_York"  width="800" height="600" frameBorder="0" scrolling="no"></iframe>
        </Row>
      </Col>
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);