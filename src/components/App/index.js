import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { withAuthentication, AuthUserContext } from '../Sessions';
import {withFirebase} from '../Firebase/context';
import TopBar from '../TopBar';
import '../../styles/global.scss';
import './styles.scss';
import '../../styles/animations.scss';

class App extends Component {
  render () {
    return (
      <Container fluid={true} className="App">
         <AuthUserContext.Consumer>
          {authUser =>
            authUser ? <TopBar loggedIn={true}/>  : <TopBar loggedIn={false}/> 
          }
        </AuthUserContext.Consumer>
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

export default withFirebase(withRouter(withAuthentication(App)));
