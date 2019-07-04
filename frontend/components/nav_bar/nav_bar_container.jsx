import { connect } from "react-redux";

import {logoutUser} from '../../actions/session_action';

import NavBar from './nav_bar';


const msp = state => ({
  currentUser: state.session.currentUser
});


const mdp = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
};

export default connect(msp, mdp)(NavBar);