/* eslint-disable react/prop-types */
import "./Modal.css";
export const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onRequestClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onRequestClose}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};