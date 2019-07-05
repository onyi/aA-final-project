import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';


export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  user
});


export const getUser = (id) => dispatch => {
  console.log(`User action: ${id}`)
  return (
  UserApiUtil.getUser(id)
    .then( user => dispatch(receiveUser(user)))
    .catch( errors => console.log(JSON.stringify(errors)))
)};

export const getUsers = () => dispatch => (
  UserApiUtil.getUsers()
    .then( users => dispatch(receiveUsers(users)))
    .catch( errors => console.log(JSON.stringify(errors)))
);

export const updateUser = (user) => dispatch => (
  UserApiUtil.updateUser(user)
    .then( user => dispatch(receiveUser(user)))
    .catch( errors => console.log(JSON.stringify(errors)))
);


