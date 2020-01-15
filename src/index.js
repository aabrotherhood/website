import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import history from './history.js';
import './index.scss';
import App from './components/App/index';
import Landing from './components/Landing/index';
import Home from './components/Home/index';
import CustomForm from './components/CustomFormWrapper/index';
import * as serviceWorker from './serviceWorker';
import * as ROUTES from './constants/routes';
import Firebase, { FirebaseContext } from './components/Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router history={history}>
      <App>
        <Route exact path={ROUTES.LANDING} component={Landing}></Route>
        <Route path={ROUTES.MEMBERS} component={App}></Route>
        <Route path={ROUTES.LOGIN} render={() => <CustomForm type='Login'/>}></Route>
        <Route path={ROUTES.SIGNUP} render={() => <CustomForm type='Sign Up'/>}></Route>
        <Route path={ROUTES.HOME} component={Home}></Route>
      </App>
    </Router>
  </FirebaseContext.Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
