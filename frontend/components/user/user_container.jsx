import User from './user';
import { getUser, updateUser, removeUserErrors } from '../../actions/user_action';

import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';

import { addNotification } from '../../actions/notification_action'

import { fetchProductsByPublisher } from '../../actions/product_action';

const msp = (state = {}, ownProps) => {
  let userId = ownProps.match.params.userId;
  let user = state.entities.users[userId] || {};
  let errors = state.errors.user;
  let products = Object.values(state.entities.products);
  let loading = state.ui.loading.product.publishedProductLoading
  return { userId, user, errors, products, loading };
};

const mdp = dispatch => ({
  getUser: (id) => dispatch(getUser(id)),
  updateUser: (user) => dispatch(updateUser(user)),
  removeUserErrors: () => dispatch(removeUserErrors()),
  addNotification: (message) => dispatch(addNotification(message)),
  getUserProducts: (publisherId) => dispatch(fetchProductsByPublisher(publisherId)),
});

export default withRouter(connect(msp, mdp)(User));