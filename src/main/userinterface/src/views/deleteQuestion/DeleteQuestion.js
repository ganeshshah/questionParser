import React, { useState } from "react";

function DeleteQuestion() {
    const [showPopup, setShowPopup] = useState(false);

    const handleDelete = () => {
        // Send a delete request to the backend here
        // After successful deletion, you can close the popup
        // Handle error cases and provide user feedback as needed
        setShowPopup(false);
    };

    return (
        <div>
            <button
                onClick={() => setShowPopup(true)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            >
                Delete Question
            </button>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Delete Confirmation</h2>
                        <p className="mb-4">Are you sure you want to delete this question?</p>
                        <div className="flex justify-end">
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white py-2 px-4 rounded mr-2 hover:bg-red-700"
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => setShowPopup(false)}
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DeleteQuestion;
