import React from 'react';


export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <span className="fa fa-times" aria-hidden="true" onClick={handleClose} />
        </div>
        {children}
      </section>
    </div>
  );
};