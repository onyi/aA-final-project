import {connect} from 'react-redux';

import ProductDetail from './product_detail';

import { fetchProduct } from '../../actions/product_action';

const msp = (state = {}, ownProps) => {
  return {
    product: state.entities.products[ownProps.match.params.productId],
    loading: state.ui.loading.product.detailLoading,
    show: true
  }
};

const mdp = dispatch => {
  return {
    getProduct: (productId) => dispatch(fetchProduct(productId))
  }
};


export default connect(msp, mdp)(ProductDetail);