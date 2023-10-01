import React, { useState } from 'react';
import HintModal from './HintModal';
import EditModal from './EditModal';
import { deleteQuestionById, submitQuestion } from '../services/services'
import ConfirmationModal from "./ConfirmationModal";

function QuestionBlock(props) {
  const [inputValue, setInputValue] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [isHintModalOpen, setisHintModalOpen] = useState(false);

  const id = props.question.id;
  const question = props.question.question;
  const answerKey = props.question.answerKey;
  const hint = props.question.hint;
  const subject = props.question.subject;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const dataToSend = {
    testId: props.testIdObject ? props.testIdObject.testId : 0,
    month: props.question.month,
    questionId: id,
    result: 0,
    testDate: props.testIdObject ? props.testIdObject.date : null,
    subject: subject
  };

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputValue.toUpperCase() === answerKey.toUpperCase()) {
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
      } catch (error) {
        console.error("Error post data:", error);
      }
    }
  };

  const openHintModal = () => {
    setisHintModalOpen(true);
  };

  const closeHintModal = () => {
    setisHintModalOpen(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const deleteQuestion = () => {
    // Open the confirmation modal when the delete button is clicked.
    setIsConfirmationModalOpen(true);
  };

  const confirmDelete = async () => {
    // Close the confirmation modal.
    setIsConfirmationModalOpen(false);

    try {
      // Send a delete request to the backend.
      await deleteQuestionById(id); // Pass the question ID to your delete function.
      props.setAlert(true);
      props.getQuestions();
      // Handle the deletion on the front end (remove the question from the UI, etc.).
      // You can use a state management library or update the UI state as needed.
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <>

      <div className='whitespace-pre-line border border-gray-300 p-4 mb-4 rounded-md shadow-md bg-gray-100 flex flex-col gap-2'>
        <table className='w-full border-collapse '>
          <tbody>
            <tr>
              <th className='border border-gray-300 p-2 text-left'>ID</th>
              <th className='border border-gray-300 p-2 text-left'>Subject</th>
              <th className='border border-gray-300 p-2 text-left'>Question</th>
            </tr>
            <tr key={id}>
              <td className='border border-gray-300 p-2 text-left'>{id}</td>
              <td className='border border-gray-300 p-2 text-left'>{subject}</td>
              <td className='border border-gray-300 p-2 text-left'>{question}</td>
            </tr>
          </tbody>
        </table>
        <input
          className='w-full p-2 border border-gray-300 rounded-md'
          placeholder='Your Answer'
          value={inputValue}
          onChange={inputHandler}
        />
        <div className='self-end'>
          <button onClick={handleSubmit} type='submit' className='mr-2 mt-2 px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer whitespace-nowrap'>
            Submit Answer
          </button>
          <button onClick={openEditModal} className='mr-2 mt-2 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer whitespace-nowrap' >
            Edit Question
          </button>
          <button onClick={openHintModal} className='mr-2 mt-2 px-4 py-2 text-white rounded-md cursor-pointer whitespace-nowrap bg-orange-600' >
            Knowledge nuggets
          </button>
          {isHintModalOpen && <HintModal hint={hint} onClose={closeHintModal} />}
          <button onClick={deleteQuestion} className='px-4 mt-2 py-2 bg-red-500 text-white rounded-md cursor-pointer whitespace-nowrap'>
            Delete Question
          </button>
          {isConfirmationModalOpen && (
            <ConfirmationModal
              isOpen={isConfirmationModalOpen}
              onClose={() => setIsConfirmationModalOpen(false)}
              onConfirm={confirmDelete}
            />
          )}
        </div>
        <div className={`${resultMessage.includes('Success') ? 'text-green-500' : 'text-red-500'}`}>
          <p>{resultMessage}</p>
        </div>
        {isEditModalOpen && (
          <EditModal
            props={props.question}
            onClose={closeEditModal}
            getQuestions={props.getQuestions}
          />
        )}
      </div>
    </>
  );
}

export default QuestionBlock;
