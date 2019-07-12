import {connect} from 'react-redux';

import ProductForm from './product_form';

import { createProduct, updateProduct, openProductForm } from '../../actions/product_action';

const msp = (state, ownProps) => {
  // console.log(`Container state: ${JSON.stringify(state)}`);
  let product = {
    title: '',
    description: '',
    header: '',
    link: '',
    header_img: '',
    publisher_id: ownProps.currentUserId,
  };
  let productId;
  if(ownProps.match.params.productId){
    productId = ownProps.match.params.productId;
    product = state.entities.products[productId];
    product.photoUrl = product.header_img;
    // console.log(`Product Form Container, Product object: ${JSON.stringify(product)} `);
  }
  return {
    products: {
      show: state.entities.products.show,
    },
    product,
    currentUserId: state.session.currentUserId,
    productId
  }

};

const mdp = dispatch => ({
  createProduct: product => {
    // console.log(`Container createProduct: ${JSON.stringify(product)}`);
    dispatch(createProduct(product))
  },
  updateProduct: product => {
    // console.log(`Container updateProduct: ${JSON.stringify(product)}`);
    dispatch(updateProduct(product))
  },
  openProductForm: () => {
    dispatch(openProductForm());
  },
  closeProductForm: () => {
    dispatch(closeProductForm());
  },

  
});

export default connect(msp, mdp)(ProductForm);