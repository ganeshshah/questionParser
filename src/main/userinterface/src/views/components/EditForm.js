import React, { useState, useEffect } from 'react';
import './EditForm.css'; // Import the CSS file
import { useLocation } from 'react-router-dom';

function EditForm() {
  const location = useLocation();
  const [formData, setFormData] = useState(location.state);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:8080/editMcq', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the updated form data
      });

      if (response.ok) {
        // Handle a successful response here
        console.log('PUT request successful');
      } else {
        // Handle errors if the request is not successful
        console.error('PUT request failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error);
    }
  };

  return (
    <div className="edit-form-container">
      <h2>Edit Question</h2>
      <form className="edit-form">
        <div>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
          />
        </div>
        <div>
          <label>Question:</label>
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Answer Key:</label>
          <input
            type="text"
            name="answerKey"
            value={formData.answerKey}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Hint:</label>
          <textarea
            name="hint"
            value={formData.hint}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="button-container">
        <button className="save" onClick={handleSave}>
          Save
        </button>
        <button className="cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditForm;
