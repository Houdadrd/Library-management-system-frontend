import './Dialog.css';

function Dialog({ isOpen, onClose, onConfirm, message }) {

    if (!isOpen) return null;

  return (
    <div className="all-dialog">
      <div className="dialog-container">
        <h3>{message}</h3>
        <div className="accept-message">
          <button onClick={onConfirm} className="yes-btn">
            Yes
          </button>
          <button onClick={onClose} className="no-btn">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
