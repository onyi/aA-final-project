export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_SINGLE_PRODUCT = 'RECEIVE_SINGLE_PRODUCT';

export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';
export const CLEAR_PRODUCT_ERRORS = 'CLEAR_PRODUCT_ERRORS';

export const START_LOADING_ALL_PRODUCTS = 'START_LOADING_ALL_PRODUCTS';
export const START_LOADING_PRODUCT = 'START_LOADING_PRODUCT';
export const FINISH_LOADING_ALL_PRODUCTS = 'FINISH_LOADING_ALL_PRODUCTS';
export const FINISH_LOADING_PRODUCT = 'FINISH_LOADING_PRODUCT';

export const START_LOADING_UPVOTE = 'START_LOADING_UPVOTE';
export const FINISH_LOADING_UPVOTE = 'FINISH_LOADING_UPVOTE';
export const RECEIVE_PRODUCT_UPVOTE = 'RECEIVE_PRODUCT_UPVOTE'; 

export const START_CREATING_PRODUCT = 'START_CREATING_PRODUCT';
export const FINISH_CREATING_PRODUCT = 'FINISH_CREATING_PRODUCT';

import * as ProductApiUtil from '../util/product_api_util';

import * as ProductVoteApiUtil from '../util/product_vote_api_util';

import {
  renderError,
  removeErrorMessage
} from './error_action';

import { addNotification, removeNotification } from './notification_action'; 

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveSingleProduct = (product) => ({
  type: RECEIVE_SINGLE_PRODUCT,
  product
});

export const startLoadingUpvote = (productId) => ({
  type: START_LOADING_UPVOTE,
  productId
});

export const finishLoadingUpvote = (productId) => ({
  type: FINISH_LOADING_UPVOTE,
  productId
});

export const startCreatingProduct = () => ({
  type: START_CREATING_PRODUCT
});

export const finishCreatingProduct = () => ({
  type: FINISH_CREATING_PRODUCT,
});


export const receiveProductUpvote = (upvoteCount, productId, userId, upvotedProducts, isUpvoted) => ({
  type: RECEIVE_PRODUCT_UPVOTE,
  upvoteCount,
  productId,
  userId,
  upvotedProducts,
  isUpvoted
});

export const receiveProductErrors = (errors, id) => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors: errors.responseJSON,
  id
});

export const fetchAllProducts = () => dispatch => {
  dispatch({ type: START_LOADING_ALL_PRODUCTS, loading: true });
  return ProductApiUtil.fetchAllProducts()
    .then( products => {
      dispatch(receiveProducts(products));
      dispatch({ type: FINISH_LOADING_ALL_PRODUCTS });
    })
    .catch(errors => { dispatch(receiveProductErrors(errors)) } )
};

export const fetchProduct = (id) => dispatch => {
  dispatch({ type: START_LOADING_PRODUCT, loading: true });
  return ProductApiUtil.fetchProduct(id)
    .then( product => {
      dispatch(receiveSingleProduct(product));
      dispatch({ type: FINISH_LOADING_PRODUCT });
    })
    .fail(errors => { dispatch(receiveProductErrors(errors)) } )
    // .always(dispatch({ type: FINISH_LOADING_PRODUCT })
  };

export const createUpvote = (productId) => dispatch => {
  dispatch(startLoadingUpvote(productId));
  return ProductVoteApiUtil.postUpvote(productId)
    .then( productVote => {
      dispatch(
        receiveProductUpvote(
          productVote.upvotes,
          productVote.product_id,
          productVote.user_id,
          productVote.upvoted_products,
          productVote.is_upvoted
        )
      );
      dispatch(finishLoadingUpvote(productId));
    })
    .catch( errors => dispatch(receiveProductErrors(errors)))
};

export const deleteUpvote = (productId) => dispatch => {
  dispatch(startLoadingUpvote(productId));
  return ProductVoteApiUtil.deleteUpvote(productId)
    .then( productVote => {
      dispatch(
        receiveProductUpvote(
          productVote.upvotes,
          productVote.product_id,
          productVote.user_id,
          productVote.upvoted_products,
          productVote.is_upvoted
        )
      );
      dispatch(finishLoadingUpvote(productId));
    })
    .catch( errors => dispatch(receiveProductErrors(errors)))
};

const randomNumber = (length) => {
  return Math.floor(Math.random() * length)
}

export const createProduct = (product) => dispatch => {
  dispatch(startCreatingProduct());
  return ProductApiUtil.postProduct(product)
    .then( product => {
      // console.log(`Response product: ${JSON.stringify(product)} `)
      dispatch(receiveSingleProduct(product));
      dispatch(finishCreatingProduct(product.id));
      dispatch(addNotification("Created product successfully!", randomNumber(4) ));
    })
    .catch( errors => {
      let errorMsg = errors.responseJSON;
      // console.log(`errors responseJSON: ${JSON.stringify(errorMsg)}`)
      // dispatch(receiveProductErrors(errors));
      // errorMsg.forEach(error => {
      //   console.log(`Error: ${error}`)
      //   dispatch(renderError(error), randomNumber(5))
      // }
      // );
      dispatch(renderError(errorMsg), randomNumber(5));
    })
};