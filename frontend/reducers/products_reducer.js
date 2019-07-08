import merge from 'lodash/merge';


import {
  RECEIVE_SINGLE_PRODUCT,
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT_UPVOTE,
} from '../actions/product_action';


const productsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PRODUCTS:
      return merge({}, action.products);
    case RECEIVE_SINGLE_PRODUCT:
      return merge({}, state, {[action.product.id] : action.product });
    case RECEIVE_PRODUCT_UPVOTE:
      return merge({}, state, {[action.product.id] : action.product });
    default: 
      return state;
  }
}

export default productsReducer;