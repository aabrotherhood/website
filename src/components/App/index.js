import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { withFirebase } from '../Firebase';
import '../../styles/global.scss';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    }
  }
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }
  componentWillUnmount() {
    this.listener();
  }
  render () {
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

export default withRouter(withFirebase(App));
