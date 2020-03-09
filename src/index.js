import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route } from 'react-router-dom';
import history from './history.js';
import './index.scss';
import App from './components/App/index';
import Landing from './components/Landing/index';
import Members from './components/Members';
import CustomForm from './components/CustomFormWrapper/index';
import Edit from './components/Edit/index';
import IndBrother from './components/IndBrother';
import IndRecruit from './components/IndRecruit';
import RSignUp from './components/RecruitmentSignUp';
import Recruits from './components/Recruits';
import RecruitmentComments from './components/RecruitmentComments';
import Emails from './components/Emails';
import RecruitmentImages from './components/RecruimentImages';
import Meals from './components/Meals';
import Delibs from './components/Delibs';
import DelibsOrder from './components/DelibsOrder';
import DelibsRecruit from './components/DelibsRecruit';
import * as serviceWorker from './serviceWorker';
import * as ROUTES from './constants/routes';
import Firebase, { FirebaseContext } from './components/Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router history={history}>
      <App>
        <Route exact path={ROUTES.LANDING} component={Landing}></Route>
        <Route path={ROUTES.MEMBERS} component={Members}></Route>
        <Route path={ROUTES.LOGIN} render={() => <CustomForm type='Login'/>}></Route>
        <Route path={ROUTES.HOME} component={Landing}></Route>
        <Route path={ROUTES.EDIT} component={Edit}></Route>
        <Route path={ROUTES.INDBROTHER} component={IndBrother}></Route>
      </App>
    </Router>
  </FirebaseContext.Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
