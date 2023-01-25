import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route } from 'react-router-dom';
import history from './history.js';
import './index.scss';
import App from './components/App/index';
import Landing from './components/Landing/index';
import Members from './components/Members';
// This is signup code
// import CustomForm from './components/CustomFormWrapper/index';
// End signup code
import Edit from './components/Edit/index';
import IndBrother from './components/IndBrother';
// This is recruitment code
// import IndRecruit from './components/IndRecruit';
// import RSignUp from './components/RecruitmentSignUp';
// import Recruits from './components/Recruits';
// import RecruitmentComments from './components/RecruitmentComments';
// import Emails from './components/Emails';
// import RecruitmentImages from './components/RecruimentImages';
// import Meals from './components/Meals';
// End recruitment code
import * as serviceWorker from './serviceWorker';
import * as ROUTES from './constants/routes';
import Firebase, { FirebaseContext } from './components/Firebase';
// This is delibs code
// import Final from './components/Final';
// import Delibs from './components/Delibs';
// import DelibsOrder from './components/DelibsOrder';
// import DelibsRecruit from './components/DelibsRecruit';
// End delibs code
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router history={history}>
      <App>
        <Route exact path={ROUTES.LANDING} component={Landing}></Route>
        <Route path={ROUTES.MEMBERS} component={Members}></Route>
        <Route path={ROUTES.LOGIN} render={() => <CustomForm type='Login'/>}></Route>
        {/* <Route path={ROUTES.SIGNUP} render={() => <CustomForm type='Sign Up' />}/> */}
        <Route path={ROUTES.HOME} component={Landing}></Route>
        <Route path={ROUTES.EDIT} component={Edit}></Route>
        <Route path={ROUTES.INDBROTHER} component={IndBrother}></Route>
        {/* <Route exact path={ROUTES.RECRUITMENTSIGNUP} component={RSignUp}></Route>
        <Route path={ROUTES.RECRUITMENT} component={Recruits}></Route>
        <Route path={ROUTES.INDRECRUIT} component={IndRecruit}></Route>
        <Route path={ROUTES.RECRUITMENTCOMMENTS} component={RecruitmentComments}></Route>
        <Route path={ROUTES.RECRUITMENTEMAILS} component={Emails}/>
        <Route path={ROUTES.RECURITMENTIMAGES} component={RecruitmentImages}/> */}
        {/* <Route path={ROUTES.MEALS} component={Meals}/> */}
        {/* <Route path={ROUTES.FINAL} component={Final}/> */}
        {/* <Route path={ROUTES.DELIBS} component={Delibs}/> */}
        {/* <Route exact path={ROUTES.DELIBSORDER} component={DelibsOrder}/>
        <Route exact path={ROUTES.DELIBSRECRUIT} component={DelibsRecruit}/> */}
      </App>
    </Router>
  </FirebaseContext.Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
