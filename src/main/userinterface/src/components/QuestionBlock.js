import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './QuestionBlock.css';
import HintModal from './HintModal';
import axios from 'axios';
import EditModal from './EditModal';
import { submitQuestion } from '../services'

function QuestionBlock(props) {
  const [inputValue, setInputValue] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const id = props.question.id;
  const question = props.question.question;
  const answerKey = props.question.answerKey;
  const hint = props.question.hint;
  const subject = props.question.subject;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const navigate = useNavigate();
  const navigateToEdit = () => {
    // 👇️ navigate to /contacts
    navigate('/EditForm', { state: { id, question, answerKey, hint, subject } });
  };

  // Use useEffect to send a POST request when formData changes

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const dataToSend = {
    testId: props.testIdObject ? props.testIdObject.testId : 0,
    month: props.question.month,
    questionId: id,
    result: 0,
    testDate: props.testIdObject ? props.testIdObject.date : null,
    subject: subject
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputValue === answerKey) {
      if (props.testIdObject != null) {
        dataToSend.result = 1;
      }
      setResultMessage('Success: Your answer is correct');
    } else {
      setResultMessage('Incorrect: Try again.');
    }

    if (props.testIdObject != null) {

      try {
        const resData = await submitQuestion(dataToSend);
        console.log(resData)
      } catch (error) {
        console.error("Error post data:", error);
      }
    }

    

  };

  const knowledgeNuggets = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeHintModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className='quest-block'>
      <table className='quest-table'>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Question</th>
          </tr>
          <tr key={id}>
            <td>{id}</td>
            <td>{subject}</td>
            <td>{question}</td>
          </tr>
        </tbody>
      </table>
      <div className='quest-buttons'>
        <form onSubmit={handleSubmit}>
          <input
            className='input-field' // Added class for styling
            placeholder='Your Answer'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type='submit' className='submit-button'>
            Submit Answer
          </button>
        </form>
        <button className='button' onClick={openEditModal}>Edit Question</button>
        <button className='button' style={{ backgroundColor: 'orange' }} onClick={knowledgeNuggets}>Knowledge nuggets</button>
        {isModalOpen && <HintModal hint={hint} onClose={closeHintModal} />} {/* Render the modal when open */}
        <button className='button' style={{ backgroundColor: 'red' }}>Delete Question</button>
        <div className={`result ${resultMessage.includes('Success') ? 'success' : 'error'}`}>
          <p>{resultMessage}</p>
        </div>
        {isEditModalOpen && (
          <EditModal
            props={props.question}
            onClose={closeEditModal}
          />
        )}
      </div>
    </div>
  );
}

export default QuestionBlock;
