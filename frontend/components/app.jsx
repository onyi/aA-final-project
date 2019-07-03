import React from 'react';

import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';

import {Route} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


export default () => {
  toast.configure({
    autoClose: 5000,
    hideProgressBar: true,
    pauseOnHover: false,
    position: "top-center"
  });
  return (
  <div>
    {/* Add Navbar Container later */}
    <ToastContainer />
    <Route path="/" component={NavBarContainer} /> 
    <Route exact path="/" component={Home} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
)};