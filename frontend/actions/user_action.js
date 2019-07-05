import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const REMOVE_USER_ERRORS = 'REMOVE_USER_ERRORS';



export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const removeUserErrors = () => ({
  type: REMOVE_USER_ERRORS
});


export const getUser = (id) => dispatch => {
  return (
  UserApiUtil.getUser(id)
    .then( user => dispatch(receiveUser(user)) )
    .catch(errors => dispatch(receiveUserErrors(errors) ))
)};

export const getUsers = () => dispatch => (
  UserApiUtil.getUsers()
    .then( users => dispatch(receiveUsers(users)) )
    .catch(errors => dispatch(receiveUserErrors(errors) ))
);

export const updateUser = (user) => dispatch => (
  UserApiUtil.updateUser(user)
    .then( user => dispatch(receiveUser(user)) )
    .catch(errors => dispatch(receiveUserErrors(errors) ))
);


