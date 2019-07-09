import { toast } from 'react-toastify';

import React from 'react';

export const SHOW_ERROR = 'SHOW_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';

export const renderError = (errorMsg, id) => dispatch => {
  if (errorMsg.constructor !== Array){
    errorMsg = [errorMsg]
  }
  errorMsg.forEach(
    error => {
      toast(<div className="notification-wrapper">{error}</div>, {
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
        message: error,
        id
      })
    }
  )

  // TODO: cannot dispatch multiple times...
  // toast(<div className="notification-wrapper">{errors}</div>, {
  //   pauseOnHover: false,
  //   autoClose: 5000,
  //   type: toast.TYPE.ERROR,
  //   position: "top-center",
  //   onClose: () => {
  //     dispatch(removeErrorMessage(id));
  //   }
  // });
  // dispatch({
  //   type: SHOW_ERROR,
  //   message,
  //   id
  // })
}

export const removeErrorMessage = (id) => dispatch => {
  dispatch({
    type: REMOVE_ERROR,
    id
  })
};
