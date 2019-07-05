import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../actions/user_action';

import merge from 'lodash/merge';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user})
    case RECEIVE_USERS:
      return merge({}, users)
    default:
      return state;
  }
}


export default usersReducer;