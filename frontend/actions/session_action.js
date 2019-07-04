
import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};
const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

const receiveSessionErrors = (errors) =>  {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const removeSessionErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS
  }
}


// implement action to handles Session API

export const loginUser = (user) => dispatch => (
  SessionApiUtil.loginUser(user).then( user => dispatch(receiveCurrentUser(user)) )
);

export const logoutUser = () => dispatch => (
  SessionApiUtil.logoutUser()
    .then( user => dispatch(logoutCurrentUser()) )
    .catch(errors => dispatch(receiveSessionErrors(errors.responseJSON)))
);

export const signupUser = (user) => dispatch => (
  SessionApiUtil.signupUser(user)
    .then( user => dispatch(receiveCurrentUser(user)))
    .catch(errors => dispatch(receiveSessionErrors(errors.responseJSON)))
);