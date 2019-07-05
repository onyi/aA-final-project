import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from "./components/root"



document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let preloadedState = {};
  if (window.currentUser){
    let currentUser = window.currentUser;
    //If user is still logged in, set the user object to entities and session
    preloadedState = {
      session: { currentUserId: currentUser.id },
      entities: {
        users: { [currentUser.id]: currentUser }
      }
    };
  }
  let store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root)
})