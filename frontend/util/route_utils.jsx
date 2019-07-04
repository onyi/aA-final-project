import React from 'react';
import {connect} from 'react-redux';

import { Redirect, withRouter, Route} from 'react-router-dom';


const msp = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ path, component: Component, loggedIn }) => (
  <Route 
    path={path}
    render={props => {
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }}
  />
);

const Auth = ({ path, component: Component, loggedIn }) => (
  <Route 
    path={path}
    render={props => {
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }}
  />
);


