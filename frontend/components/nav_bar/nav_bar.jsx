import React from 'react';

import {Link} from 'react-router-dom';

export default ({ currentUser, logoutUser}) => {
  let display = currentUser ? (
    <div className="nav-bar__action">
      <span>{currentUser.username}</span>
      <Link to={`/user/${currentUser.id}`}><i className="fas fa-user link-button"></i></Link>
      <a className="link-button" onClick={logoutUser}>Logout</a>
    </div>
  ) : (
    <div className="nav-bar__action">
      <Link to="/login" className="link-button" >Sign In</Link>
      <Link to={`/signup`} id="nav-bar__signup" className="link-button" >Sign Up</Link>
    </div>
  );

  return (
    <div className="nav-bar">
      <header className="nav-bar__wrapper">
        <a href="/"><i className="fab fa-product-hunt nav-bar__logo"></i></a>
        {/* <Link to="/">
          <h1 className="nav-bar-logo"></h1>
        </Link> */}
        <div className="nav-bar__action">
          <Link to="/product/create" id="product-create-button">
            <i className="fas fa-plus" placeholder="Create New Product"></i>
          </Link>
          <div className="auth-ele">
            {display}
          </div>
        </div>
      </header>
    </div>
  )
}