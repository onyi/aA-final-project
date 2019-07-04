import {connect} from 'react-redux';
import { loginUser, removeSessionErrors} from '../../actions/session_action';

import Login from './login';

const msp = state => {
  let show = state.show || true;
  let errors = state.errors.session;
  return { session: {show}, errors};
}


const mdp = dispatch => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
  };
};


export default connect(msp, mdp)(Login);