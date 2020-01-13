import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import history from './history.js';
import './index.scss';
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';
import * as ROUTES from './constants/routes';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router history={history}>
    <App>
      <Route exact path={ROUTES.LANDING} render={App}></Route>
      <Route path={ROUTES.MEMBERS} render={App}></Route>
      <Route exact path={ROUTES.LOGIN} render={App}></Route>
    </App>
  </Router>,
  // <App/>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
