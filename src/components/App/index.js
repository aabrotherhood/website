import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { withAuthentication } from '../Sessions';
import '../../styles/global.scss';
import './styles.scss';

class App extends Component {

  render () {
    console.log(this.props)
    return (
      <Container fluid={true}>
        <Row className="justify-content-center">
          <CSSTransitionGroup
            className="transitionGroup"
            transitionName="content"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              <div key={this.props.history.location.pathname}>
                {this.props.children}
              </div>
          </CSSTransitionGroup>
        </Row>
      </Container>
    );
  }
}

export default withRouter(withAuthentication(App));
