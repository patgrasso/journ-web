import React from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history';
import { Router, Route, useRouterHistory } from 'react-router';
import App from './components/App';
import ConnectForm from './components/ConnectForm';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

render((
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <Route path="/connect" component={ConnectForm}/>
    </Route>
  </Router>
), document.getElementById('app'));
