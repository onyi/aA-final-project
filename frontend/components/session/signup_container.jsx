import { connect } from 'react-redux';
import { signupUser, removeSessionErrors } from '../../actions/session_action';

import Signup from './signup';

const msp = state => {
  let errors = state.errors.session;
  console.log(`Errors from state: ${errors}`);
  return { session: {show : true}, errors};
}


const mdp = dispatch => {
  return {
    signupUser: (user) => dispatch(signupUser(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
  };
};


export default connect(msp, mdp)(Signup);