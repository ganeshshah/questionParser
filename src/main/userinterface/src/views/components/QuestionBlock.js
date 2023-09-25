import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './QuestionBlock.css';
import HintModal from './HintModal';
import axios from 'axios';

function QuestionBlock(props) {
  const [inputValue, setInputValue] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const id = props.question.id;
  const question = props.question.question;
  const answerKey = props.question.answerKey;
  const hint = props.question.hint;
  const subject = props.question.subject;

  const navigate = useNavigate();
  const navigateToEdit = () => {
    // 👇️ navigate to /contacts
    navigate('/EditForm' , { state: { id, question, answerKey, hint, subject } });
  };

    // Use useEffect to send a POST request when formData changes

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 
  const [dataToSend, setFormData] = useState({
    testId : props.testIdObject.testId,
    month : props.testIdObject.month,
    questionId : id,
    result : 0,
    testDate : props.testIdObject.date,
    subject : subject
   });

   console.log(props.testIdObject.date);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue === answerKey) {
      dataToSend.result = 1;
      setResultMessage('Success: Your answer is correct');
    } else {
      setResultMessage('Incorrect: Try again.');
    }
   
 // Send a POST request
 axios.post('http://localhost:8080/testData/submitQuestion', dataToSend)
 .then((response) => {
   console.log('POST request successful:', response.data);
   // Handle the response as needed
 })
 .catch((error) => {
   console.error('Error making POST request:', error);
   // Handle errors
 });

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
