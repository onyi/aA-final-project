import { ADD_NOTIFICATION, REMOVE_NOTIFICATION} from '../actions/notification_action';

import merge from 'lodash/merge';

const notificationReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_NOTIFICATION:
      //TODO: add notification to state with toast ID
      return merge({}, state, { [action.id] : action.message} )
    case REMOVE_NOTIFICATION:
      //TODO: remove notification from state based on an ID
      let newState = merge({}, state)
      delete newState[action.id]
      return newState;
    default:
      return state;
  }
};

export default notificationReducer;