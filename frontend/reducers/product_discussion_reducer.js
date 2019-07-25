import merge from 'lodash/merge';

import {
  RECEIVE_DISCUSSION,
  RECEIVE_DISCUSSIONS,
} from '../actions/product_discussion_action';

const productDiscussionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_DISCUSSION:
      // console.log(`Received discussion: ${JSON.stringify(action.discussion)}`)
      return merge({}, state, {[action.discussion.id] : action.discussion });
    case RECEIVE_DISCUSSIONS:
      return merge({}, action.discussions)
    default:
      return state;    
  }
};

export default productDiscussionReducer;
