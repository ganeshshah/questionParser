import React from 'react';

function ConfirmationModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay absolute inset-0 bg-gray-800 opacity-50"></div>
            <div className="modal-container bg-white w-1/3 rounded-lg shadow-lg z-50">
                <div className="modal-content p-4">
                    <p>Are you sure you want to delete this question?</p>
                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                        >
                            Yes
                        </button>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-400 text-white rounded-md"
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
