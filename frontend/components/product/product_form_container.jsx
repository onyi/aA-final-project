import {connect} from 'react-redux';

import ProductForm from './product_form';

import { createProduct } from '../../actions/product_action';

const msp = (state, ownProps) => {
  // console.log(`Container state: ${JSON.stringify(state)}`);
  let product = {};
  if(ownProps.productId){
    product = state.entities.products[ownProps.productId];
  }
  return {
    products: {
      show: true,
    },
    product,
    currentUserId: state.session.currentUserId
  }

};

const mdp = dispatch => ({
  createProduct: product => {
    console.log(`Container dispatch product: ${JSON.stringify(product)}`);
    dispatch(createProduct(product))
  }
});

export default connect(msp, mdp)(ProductForm);