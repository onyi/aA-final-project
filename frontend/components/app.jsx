import React from 'react';

import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';

import {Route, Switch, Link, Redirect} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { AuthRoute, ProtectedRoute } from '../util/route_utils';

import UserContainer from '../components/user/user_container';

import ProducDetailContainer from '../components/product/product_detail_container';
import ProductIndexContainer from '../components/product/product_index_container';


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
        <Route exact path="/" component={ProductIndexContainer} />
        <ProtectedRoute exact path="/user/:userId" component={UserContainer} />
        <Route exact path="/product/:productId" component={ProducDetailContainer} />
      </Switch>
    </main>
    <AuthRoute path="/login" component={LoginContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
)};