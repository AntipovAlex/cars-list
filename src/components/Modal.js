import React from "react";
import  "./styles.css";

const Modal = ({ handleClose, show, children}) => {
    const showHideClassName = show ? "modal d-block" : "modal d-none";
    return (
        <div className={showHideClassName}>
            <div className="modal-container">
                <a href="#" className="btn-outline-danger" onClick={handleClose}>X</a>
                {children}
            </div>
        </div>
    );
};

export default Modal;
