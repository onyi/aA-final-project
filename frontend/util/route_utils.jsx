import React from 'react';
import {connect} from 'react-redux';

import { Redirect, withRouter, Route} from 'react-router-dom';


const msp = state => {
  return {
    loggedIn: Boolean(state.session.currentUserId),

}};

const Auth = ({ path, component: Component, loggedIn, exact }) => (
  <Route 
    path={path}
    exact={exact}
    render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ path, component: Component, loggedIn, exact }) => (
  <Route 
    path={path}
    exact={exact}
    render={props => (
      !loggedIn ? <Redirect to="/login" /> : <Component {...props} />
    )}
  />
);


export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));


