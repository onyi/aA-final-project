import User from './user';
import {getUser} from '../../actions/user_action';

import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
  let userId = ownProps.match.params.userId;
  let user = state.entities.users[userId];

  console.log(`Entities: ${JSON.stringify(state.entities)}; userId, ${JSON.stringify(userId)}; user: ${JSON.stringify(user)}`);

  return { userId, user };
};

const mdp = dispatch => ({
  getUser: (id) => dispatch(getUser(id))
});



export default withRouter(connect(msp, mdp)(User));