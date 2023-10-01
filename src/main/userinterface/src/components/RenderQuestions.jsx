import React, { useState } from 'react';
import QuestionBlock from './QuestionBlock';
import Alert from '../components/Alert'

function RenderQuestions(props) {

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [alert, setAlert] = useState(false);
  const questions = props.questions;

  //! calculations for pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const questionsToDisplay = questions.slice(startIndex, endIndex);
  const totalPages = Math.ceil(questions.length / itemsPerPage);

  const onPageChangeHandler = (newPage) => {
    setCurrentPage(newPage);
  };

  return (

    <div className='flex flex-col'>
      {alert && <Alert message={"Question deleted"} type={"success"} />}
      <p className='text-lg self-center mb-4'>MCQ Questions</p>
      {questionsToDisplay.map((question) => (
        <QuestionBlock key={question.id} question={question} testIdObject={props.testIdObject || null} getQuestions={props.getQuestions} setAlert={setAlert} />
      ))}
      <div className="">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChangeHandler(index + 1)}
            className={`w-8 ml-2 mt-2 p-2 text-sm text-white rounded-lg cursor-pointer whitespace-nowrap ${currentPage === index + 1 ? 'bg-green-500 ' : 'bg-slate-500'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RenderQuestions;
