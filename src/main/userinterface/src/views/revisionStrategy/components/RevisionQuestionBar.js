import React, { useState, useEffect } from 'react';
import { fetchAllQuestions } from '../../../services/services';
import { useNavigate } from 'react-router-dom';

function RevisionQuestionBar({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('notAttempted');
  const [param, setParam] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const questions = await fetchAllQuestions(param);
        console.log(questions);
        navigate('/revise_question', { state: { questions: questions } })

      } catch (error) {
        console.error(error);
      }
    }

    if (param) {
      fetchQuestions();
    }
  }, [param]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const prepareQuestionList = (questionList) => {
    return questionList.join(',');
  };

  const handleFetchQuestion = () => {
    let questionList;
    if (selectedOption === "notAttempted") {
      questionList = data.notAttempted;
    } else if (selectedOption === "moreThan7Days") {
      questionList = data.moreThan7Days;
    } else if (selectedOption === "moreThan15Days") {
      questionList = data.moreThan15Days;
    } else if (selectedOption === "moreThan25Days") {
      questionList = data.moreThan25Days;
    } else if (selectedOption === "lessThan80Accuracy") {
      questionList = data.lessThan80Accuracy;
    }

    const queryParams = prepareQuestionList(questionList);
    setParam(queryParams);
  };

  return (
    <div className="RevisionQuestionBar">
      <div className="search-container">
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="p-2 text-xs bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline mr-4"
        >
          <option value="notAttempted">Not Attempted questions</option>
          <option value="moreThan7Days">7 day overdue</option>
          <option value="moreThan15Days">15 day overdue</option>
          <option value="moreThan25Days">25 day overdue</option>
          <option value="lessThan80Accuracy">Question with less than 80% accuracy</option>
        </select>
        <button
          onClick={handleFetchQuestion}
          className=' text-xs bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-md'
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default RevisionQuestionBar;
