import {
  START_LOADING_ALL_PRODUCTS,
  FINISH_LOADING_ALL_PRODUCTS,
  START_LOADING_PRODUCT,
  FINISH_LOADING_PRODUCT
  
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
    default:
      return state;
  }
};

export default productLoadingReducer;