import React from 'react';

import {Link} from 'react-router-dom';

export default ({ currentUser, logoutUser}) => {
  let display = currentUser ? (
    <div>
      <p>{currentUser.username}</p>
      <button onClick={logoutUser}>Logout</button>
    </div>
  ) : (
    <div >
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