import {
  RECEIVE_PRODUCT_ERRORS,
  CLEAR_PRODUCT_ERRORS
} from '../actions/product_action';

import {
  SHOW_ERROR,
  REMOVE_ERROR
} from '../actions/error_action'

import merge from 'lodash/merge';

const randomNumber = (length) => {
  return Math.floor(Math.random() * length)
}

export default( state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PRODUCT_ERRORS:
      // console.log(`Receive Error Reducer: ${JSON.stringify(action.errors)}`);
      // let id = action.id ? action.id : randomNumber(8);
      return merge({}, [...action.errors]);
    case CLEAR_PRODUCT_ERRORS:
      return [];
    case SHOW_ERROR:
      return merge({}, state, action.error);
    case REMOVE_ERROR:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default: 
      return state;
  }
}