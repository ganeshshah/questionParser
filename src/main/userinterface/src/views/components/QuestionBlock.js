import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './QuestionBlock.css';
import HintModal from './HintModal';

function QuestionBlock({ question: { id, question, answerKey, hint, subject } }) {
  const [inputValue, setInputValue] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate();
  const navigateToEdit = () => {
    // 👇️ navigate to /contacts
    navigate('/EditForm' , { state: { id, question, answerKey, hint, subject } });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue === answerKey) {
      setResultMessage('Success: Your answer is correct!');
    } else {
      setResultMessage('Incorrect: Try again.');
    }
  };

  const knowledgeNuggets = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeHintModal = () => {
    setIsModalOpen(false); // Close the modal
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
        <button className='button' onClick={navigateToEdit} >Edit Question</button>
        <button className='button'>Delete Question</button>
        <button className='button' onClick={knowledgeNuggets}>Knowledge nuggets</button>
        {isModalOpen && <HintModal hint={hint} onClose={closeHintModal} />} {/* Render the modal when open */}
        <div className={`result ${resultMessage.includes('Success') ? 'success' : 'error'}`}>
          <p>{resultMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default QuestionBlock;
