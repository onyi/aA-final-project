import {connect} from 'react-redux';
import ProductIndex from './product_index';

import { 
  fetchAllProducts, 
  fetchProduct,
  createUpvote,
  deleteUpvote
} from '../../actions/product_action';


const msp = (state = {}, ownProps) => {
  // console.log(`Product Index Container State: ${JSON.stringify(state)}`);
  // console.log(`Product Index Container ownProps: ${JSON.stringify(ownProps)}`);
  return {
    products: Object.values(state.entities.products),
    loading: state.ui.loading.product.indexLoading,
    errors: state.errors.product
  };
};


const mdp = dispatch => ({
  getAllProducts: () => dispatch(fetchAllProducts()),
  getProduct: (id) => dispatch(fetchProduct(id)),
  postUpvote: (id) => dispatch(createUpvote(id)),
  deleteUpvote: (id) => dispatch(deleteUpvote(id)),
});

export default connect(msp, mdp)(ProductIndex)