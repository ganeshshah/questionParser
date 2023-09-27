import React from 'react';
import './HintModal.css'

function HintModal({ hint, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Knowledge Nugget</h3>
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="modal-content">
          <p>{hint}</p>
        </div>
      </div>
    </div>
  );
}

export default HintModal;
