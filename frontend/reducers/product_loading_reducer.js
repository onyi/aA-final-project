import {
  START_LOADING_ALL_PRODUCTS,
  FINISH_LOADING_ALL_PRODUCTS,
  START_LOADING_PRODUCT,
  FINISH_LOADING_PRODUCT,
  START_LOADING_UPVOTE,
  FINISH_LOADING_UPVOTE,
  START_CREATING_PRODUCT,
  FINISH_CREATING_PRODUCT,
  START_UPDATING_PRODUCT,
  FINISH_UPDATING_PRODUCT,
  START_LOADING_PUBLISHER_PRODUCTS,
  FINISH_LOADING_PUBLISHER_PRODUCTS,  
  START_LOADING_PARTIAL_PRODUCTS,
  FINISH_LOADING_PARTIAL_PRODUCTS
} from '../actions/product_action';

import {
  START_LOADING_DISCUSSIONS,
  FINISH_LOADING_DISCUSSIONS,
  START_LOADING_DISCUSSION_UPVOTE,
  FINISH_LOADING_DISCUSSIONS_UPVOTE
} from '../actions/product_discussion_action'

import merge from 'lodash/merge';

const productLoadingReducer = (state = 
  { createLoading: false, 
    indexLoading: false, 
    upvoteLoading: {}, 
    detailLoading: false, 
    publishedProductLoading: false,
    discussionsLoading: false,
    discussionUpvoteLoading: false
  }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_ALL_PRODUCTS:
      return merge({}, state, { indexLoading: true });
    case FINISH_LOADING_ALL_PRODUCTS:
      return merge({}, state, { indexLoading: false });
    case START_LOADING_PARTIAL_PRODUCTS:
        return merge({}, state, { indexPartialLoading: true });
    case FINISH_LOADING_PARTIAL_PRODUCTS:
      return merge({}, state, { indexPartialLoading: false });
    case START_LOADING_PRODUCT:
      return merge({}, state, { detailLoading: true });
    case FINISH_LOADING_PRODUCT:
      return merge({}, state, { detailLoading: false });
    case START_LOADING_UPVOTE:
      return merge({}, state, { upvoteLoading: { [action.productId] : true} });
    case FINISH_LOADING_UPVOTE:
      return merge({}, state, { upvoteLoading: { [action.productId] : false } });
    case START_CREATING_PRODUCT:
      return merge({}, state, { createLoading: true });
    case FINISH_CREATING_PRODUCT:
      return merge({}, state, { createLoading: false });
    case START_UPDATING_PRODUCT:
      return merge({}, state, { updateLoading: true });
    case FINISH_UPDATING_PRODUCT:
      return merge({}, state, { updateLoading: false });
    case START_LOADING_PUBLISHER_PRODUCTS:
      return merge({}, state, { publishedProductLoading: true });
    case FINISH_LOADING_PUBLISHER_PRODUCTS:
      return merge({}, state, { publishedProductLoading: false });
    case START_LOADING_DISCUSSIONS:
      return merge({}, state, { discussionsLoading: true });
    case FINISH_LOADING_DISCUSSIONS:
      return merge({}, state, { discussionsLoading: false });
    case START_LOADING_DISCUSSION_UPVOTE:
      return merge({}, state, { discussionUpvoteLoading: { [action.discussionId]: true } });
    case FINISH_LOADING_DISCUSSIONS_UPVOTE:
      return merge({}, state, { discussionUpvoteLoading: { [action.discussionId]: false } });
    default:
      return state;
  }
};

export default productLoadingReducer;