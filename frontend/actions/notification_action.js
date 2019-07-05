import { toast } from 'react-toastify';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const addNotification = (message) => dispatch => {
  
  let id = toast(message, {
    pauseOnHover: false,
    autoClose: 5000,
    type: toast.TYPE.INFO,
    onClose: (props) => {
      console.log(JSON.stringify(props));
      dispatch(removeNotification(props.id));
    } 
  });
  dispatch({
    type: ADD_NOTIFICATION,
    message,
    id
  })
};

export const removeNotification = (id) => dispatch => {
  dispatch({
    type: REMOVE_NOTIFICATION,
    id
  })
};