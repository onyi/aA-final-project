import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import productDiscussionReducer from './product_discussion_reducer';
;
export default combineReducers({
  users: usersReducer,
  products: productsReducer,
  discussions: productDiscussionReducer
})