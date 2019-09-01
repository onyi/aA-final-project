import {connect} from 'react-redux';
 
import ProductSearch from './product_search';

import {
    searchProduct
} from '../../actions/product_action';

const msp = (state = {}, ownProps) => {
    return {

    };
};

const mdp = (dispatch) => ({
        searchProduct: (keyword, offset, limit) => { dispatch(searchProduct(keyword, offset, limit)) }
    })



export default connect(msp, mdp)(ProductSearch);