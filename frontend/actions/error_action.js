import { toast } from 'react-toastify';

import React from 'react';

export const SHOW_ERROR = 'SHOW_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';


export const renderError = (errorMsg, id) => dispatch => {
  toast(<div className="notification-wrapper">{errorMsg}</div>, {
    pauseOnHover: false,
    autoClose: 5000,
    type: toast.TYPE.ERROR,
    position: "top-center",
    onClose: () => {
      dispatch(removeErrorMessage(id));
    }
  });
  dispatch({
    type: SHOW_ERROR,
    message,
    id
  })
}

export const removeErrorMessage = (id) => dispatch => {
  dispatch({
    type: REMOVE_ERROR,
    id
  })
};
