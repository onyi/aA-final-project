import merge from 'lodash/merge';


import {
  RECEIVE_SINGLE_PRODUCT,
  RECEIVE_PRODUCTS,
  RECEIVE_PUBLISHER_PRODUCTS,
  RECEIVE_PRODUCT_UPVOTE,
  OPEN_PRODUCT_FORM,
  CLOSE_PRODUCT_FORM,
  REMOVE_PRODUCT
} from '../actions/product_action';

const productsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PRODUCTS:
      return merge({}, action.products);
    case RECEIVE_PUBLISHER_PRODUCTS: //Just in case
      return merge({}, action.products);
    case RECEIVE_SINGLE_PRODUCT:
      return merge({}, state, { [action.product.id]: action.product } );
    case REMOVE_PRODUCT:
      let newState = merge({}, state);
      delete newState[action.product.id]
      return newState;
    case RECEIVE_PRODUCT_UPVOTE:
      const product = state[action.productId];
      product.upvotes = action.upvoteCount;
      product.isUpvoted = action.isUpvoted;
      return merge({}, state, { [action.productId]: product });
    case OPEN_PRODUCT_FORM:
      return merge({}, state, { show: true });
    case CLOSE_PRODUCT_FORM:
      return merge({}, state, { show: false });
    default: 
      return state;
  }
}

export default productsReducer;