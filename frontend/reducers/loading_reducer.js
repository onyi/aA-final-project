import { combineReducers } from 'redux';

import productLoadingReducer from './product_loading_reducer'


export default combineReducers({
  product: productLoadingReducer
});