import React, {Component} from 'react';
import {withAuthorization} from '../Sessions';
import {Row, Col} from 'react-bootstrap';
import TopBar from '../TopBar';
import './styles.scss';

class Home extends Component {
  render() {
    return( 
      <Col  className="home">
        <TopBar loggedIn="true"/>
        <Row className="homeContent">
          <iframe className="calendar" title="AABCalendar" key="aabCalendar" src="https://calendar.google.com/calendar/embed?src=aa.brotherhood%40gmail.com&ctz=America%2FNew_York"  width="750" height="550" frameBorder="0" scrolling="no"></iframe>
        </Row>
      </Col>
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);