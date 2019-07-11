import React from 'react';

import {Link} from 'react-router-dom';

export default ({ currentUser, logoutUser}) => {
  let display = currentUser ? (
    <div className="nav-bar-action">
      <span>{currentUser.username}</span>
      <Link to={`/user/${currentUser.id}`}><i className="fas fa-user"></i></Link>
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
        <div className="nav-bar-action-wrapper">
          <Link to="/product/create" id="product-create-button">
            <i className="fas fa-plus-square" placeholder="Create New Product"></i>
          </Link>
          <div className="auth-ele">
            {display}
          </div>
        </div>
      </header>
    </div>
  )
}