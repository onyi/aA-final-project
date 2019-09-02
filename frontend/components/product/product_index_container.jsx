import {connect} from 'react-redux';
import ProductIndex from './product_index';

import { 
  fetchAllProducts, 
  fetchPartialProducts,
  fetchProduct,
  deleteProduct,

} from '../../actions/product_action';


const msp = (state = {}, ownProps) => {
  // console.log(`Product Index Container State: ${JSON.stringify(state)}`);
  // console.log(`Product Index Container ownProps: ${JSON.stringify(ownProps)}`);
  return {
    products: Object.values(state.entities.products),
    loading: state.ui.loading.product.indexLoading,
    errors: state.errors.product,
    partialLoading: state.ui.loading.product.indexPartialLoading
  };
};


const mdp = dispatch => ({
  getAllProducts: (offset, limit) => dispatch(fetchPartialProducts(offset, limit)),
  getProduct: (id) => dispatch(fetchProduct(id)),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
});

export default connect(msp, mdp)(ProductIndex)