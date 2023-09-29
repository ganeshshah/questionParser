import React, { useState, useEffect } from 'react';
import './EditForm.css'; // Import the CSS file
import { useLocation } from 'react-router-dom';
import { editForm } from '../services'

function EditForm({ props }) {

  const [formData, setFormData] = useState(props);
  const [isSuccess, SetIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {

      const resData = await editForm(formData)
      console.log(resData)
      //TODO:  this logic might be invalid, must be checked
      if (resData) {
        SetIsSuccess(true);
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
            readOnly={true}
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            readOnly={true}
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
        {isSuccess && <p>Data saved successfully</p>}
      </div>
    </div>
  );
}

export default EditForm;
