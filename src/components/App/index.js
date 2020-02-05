import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { withAuthentication } from '../Sessions';
import {withFirebase} from '../Firebase/context';
import TopBar from '../TopBar';
import '../../styles/global.scss';
import './styles.scss';
import '../../styles/animations.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: "false",
    };
  }
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ loggedIn: "true" })
          : this.setState({ loggedIn: "false" });
      },
    );
  }
  componentWillUnmount() {
    this.listener();
  }
  render () {
    return (
      <Container fluid={true} className="App">
        <TopBar loggedIn={this.state.loggedIn}/> 
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
