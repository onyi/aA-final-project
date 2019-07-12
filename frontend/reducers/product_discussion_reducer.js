import merge from 'lodash/merge';

import {
  RECEIVE_DISCUSSION,
  RECEIVE_DISCUSSIONS,
} from '../actions/product_discussion_action';

const productDiscussionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_DISCUSSION:
      let parentId = action.discussion.parent_discussion_id;
      if(parentId){
        //Find parent discussion first, and then append discussion to its parent discussionReplies array
        state.entities.discussions.forEach( discussion => {
          console.log(`Iterate Discussion: ${JSON.stringify(action.discussion)}`);
        })
      }else{
        console.log(`discussion to merge: ${JSON.stringify(action.discussion)}`);
        return merge({}, state, {[action.discussion.id] : action.discussion });
      }
    case RECEIVE_DISCUSSIONS:
      return merge({}, action.discussions)
    default:
      return state;    
  }
};

export default productDiscussionReducer;
