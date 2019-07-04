import React from 'react';

import {Link} from 'react-router-dom';

export default ({ currentUser, logoutUser}) => {
  let display = currentUser ? (
    <div className="nav-bar-action">
      <span>{currentUser.username}</span>
      <Link to="/user"><i class="fas fa-user"></i></Link>
      <a onClick={logoutUser}>Logout</a>
    </div>
  ) : (
    <div className="nav-bar-action">
      <Link to="/login" >Sign In</Link>
      <Link to={`/signup`} id="nav-bar-signup">Sign Up</Link>
    </div>
  );




  return (
    <div className="nav-bar-wrapper">
      <header className="nav-bar">
        <a href="/"><i className="fab fa-product-hunt nav-bar-logo"></i></a>
        {/* <Link to="/">
          <h1 className="nav-bar-logo"></h1>
        </Link> */}
        {/* TODO: Replace H1 with an icon image */}
        <div className="auth-ele">
          {display}
        </div>
      </header>
    </div>
  )
}