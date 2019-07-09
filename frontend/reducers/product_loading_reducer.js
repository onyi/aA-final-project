import {
  START_LOADING_ALL_PRODUCTS,
  FINISH_LOADING_ALL_PRODUCTS,
  START_LOADING_PRODUCT,
  FINISH_LOADING_PRODUCT,
  START_LOADING_UPVOTE,
  FINISH_LOADING_UPVOTE
  
} from '../actions/product_action';

import merge from 'lodash/merge';

const productLoadingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_ALL_PRODUCTS:
      return merge({}, state, { indexLoading: true });
    case FINISH_LOADING_ALL_PRODUCTS:
      return merge({}, state, { indexLoading: false });
    case START_LOADING_PRODUCT:
      return merge({}, state, { detailLoading: true });
    case FINISH_LOADING_PRODUCT:
      return merge({}, state, { detailLoading: false });
    case START_LOADING_UPVOTE:
      return merge({}, state, { upvoteLoading: { [action.productId] : true} });
    case FINISH_LOADING_UPVOTE:
      return merge({}, state, { upvoteLoading: { [action.productId] : false } });
    default:
      return state;
  }
};

export default productLoadingReducer;