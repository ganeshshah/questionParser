import React from 'react';
import EditForm from './EditForm';
import './EditModal.css'

function EditModal({ props, onClose }) {

  // Implement the edit form and logic here

  return (
    <div className='modal-overlay'>
      <div className='edit-modal-content'>
        <EditForm props={props} />
      </div>
      <span className='close-button' onClick={onClose}><button style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Close</button></span>
    </div>
  );
}

export default EditModal;
