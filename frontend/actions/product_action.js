export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_SINGLE_PRODUCT = 'RECEIVE_SINGLE_PRODUCT';

export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';

export const START_LOADING_ALL_PRODUCTS = 'START_LOADING_ALL_PRODUCTS';
export const START_LOADING_PRODUCT = 'START_LOADING_PRODUCT';
export const FINISH_LOADING_ALL_PRODUCTS = 'FINISH_LOADING_ALL_PRODUCTS';
export const FINISH_LOADING_PRODUCT = 'FINISH_LOADING_PRODUCT';

export const START_LOADING_UPVOTE = 'START_LOADING_UPVOTE';
export const FINISH_LOADING_UPVOTE = 'FINISH_LOADING_UPVOTE';
export const RECEIVE_PRODUCT_UPVOTE = 'RECEIVE_PRODUCT_UPVOTE'; 

import * as ProductApiUtil from '../util/product_api_util';

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveSingleProduct = (product) => ({
  type: RECEIVE_SINGLE_PRODUCT,
  product
});

export const receiveProductUpvote = (upvoteCount) => ({
  type: RECEIVE_PRODUCT_UPVOTE,
  upvoteCount
});

export const receiveProductErrors = (errors) => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
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

export const createUpvote = (id) => dispatch => {
  dispatch({ type: START_LOADING_UPVOTE });
  return ProductApiUtil.postUpvote(id)
    .then( upvoteCount => {
      dispatch(receiveProductUpvote(upvoteCount))
    })
    .catch( errors => dispatch(receiveProductErrors(errors)))
    .always(dispatch({ type : FINISH_LOADING_UPVOTE }))
};

export const deleteUpvote = (id) => dispatch => {
  dispatch({ type: START_LOADING_UPVOTE });
  return ProductApiUtil.deleteUpvote(id)
    .then( upvoteCount => {
      dispatch(receiveProductUpvote(upvoteCount))
    })
    .catch( errors => dispatch(receiveProductErrors(errors)))
    .always(dispatch({ type : FINISH_LOADING_UPVOTE }))
};