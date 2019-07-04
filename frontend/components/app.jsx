import React from 'react';

import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';

import {Route, Switch, Link, Redirect} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { AuthRoute, ProtectedRoute } from '../util/route_utils'


export default () => {
  return (
  <div>
    <header>
      <Route path="/" component={NavBarContainer} /> 
    </header>
    {/* Add Navbar Container later */}
    <ToastContainer autoClose={5000} hideProgressBar={true} newestOnTop={true} position="top-center" pauseOnHover={false}/>
    <main className="main-content">
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/user" component={User}/> */}
      </Switch>
    </main>
    <AuthRoute path="/login" component={LoginContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
)};