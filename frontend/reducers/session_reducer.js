
import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_action';
 

const _nullSession = {
  currentUserId: null
};


export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      let currentUser = action.user;
      return merge({}, { currentUserId: currentUser.id, show: false } );
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_SESSION_ERRORS:
      let errorMsg = action.error;
      let errorState = merge({}, state, { errors: errorMsg }) ;
      return errorState;
    default: 
      return state;
  }
};

