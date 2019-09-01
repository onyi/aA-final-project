import {connect} from 'react-redux';

import ProductDetail from './product_detail';

import { fetchProduct } from '../../actions/product_action';

const msp = (state = {}, ownProps) => {
  let productId = ownProps.productId || ownProps.match.params.productId;
  return {
    product: state.entities.products[productId],
    loading: state.ui.loading.product.detailLoading,
    show: true,
    onClose: ownProps.onClose
  }
};

const mdp = dispatch => {
  return {
    getProduct: (productId) => dispatch(fetchProduct(productId))
  }
};


export default connect(msp, mdp)(ProductDetail);