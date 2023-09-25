import React, { useState } from 'react';
import QuestionBlock from './QuestionBlock';

function RenderQuestions({ questions }) {
  const itemsPerPage = 20; // Number of questions to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the questions to display for the current page
  const questionsToDisplay = questions.slice(startIndex, endIndex);

  const totalPages = Math.ceil(questions.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>MCQ Questions</th>
          </tr>
          <tr>
          <button>Start test</button>
          <button>End test</button>
          </tr>
        </thead>
        <tbody>
          {questionsToDisplay.map((question) => (
            <QuestionBlock key={question.id} question={question} />
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RenderQuestions;
