import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from "./components/root"



document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let preloadedState = {};
  if (window.currentUser){
    preloadedState = {
      session: { currentUser: window.currentUser }
    };
  }
  let store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root)
})