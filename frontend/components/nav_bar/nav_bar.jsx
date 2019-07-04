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
      <Link to={`/signup`} >Sign Up</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <Link to="/">
        <h1 className="nav-bar-logo">Product Hub</h1> 
      </Link>
      {/* TODO: Replace H1 with an icon image */}
      <div className="auth-ele">
        {display}
      </div>
    </header>
  )
}