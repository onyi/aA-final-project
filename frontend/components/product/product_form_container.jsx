import {connect} from 'react-redux';

import ProductForm from './product_form';

import { createProduct } from '../../actions/product_action';

const msp = (state, ownProps) => {
  // console.log(`Container state: ${JSON.stringify(state)}`);
  let product = {};
  let productId;
  if(ownProps.match.params.productId){
    productId = ownProps.match.params.productId;
    product = state.entities.products[productId];
    product.photoUrl = product.header_img;
    console.log(`Product Form Container, Product object: ${JSON.stringify(product)} `);
  }
  return {
    products: {
      show: true,
    },
    product,
    currentUserId: state.session.currentUserId,
    productId
  }

};

const mdp = dispatch => ({
  createProduct: product => {
    console.log(`Container createProduct: ${JSON.stringify(product)}`);
    dispatch(createProduct(product))
  },
  updateProduct: product => {
    console.log(`Container updateProduct: ${JSON.stringify(product)}`);
    dispatch(updateProduct(product))
  }
  
});

export default connect(msp, mdp)(ProductForm);