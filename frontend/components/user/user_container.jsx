import User from './user';
import { getUser, updateUser } from '../../actions/user_action';

import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';

const msp = (state = {}, ownProps) => {
  let userId = ownProps.match.params.userId;
  let user = state.entities.users[userId] || {};
  return { userId, user };
};

const mdp = dispatch => ({
  getUser: (id) => dispatch(getUser(id)),
  updateUser: (user) => dispatch(updateUser(user))
});



export default withRouter(connect(msp, mdp)(User));