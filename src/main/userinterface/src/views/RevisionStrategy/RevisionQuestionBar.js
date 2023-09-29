import React, { useState } from 'react';
import './RevisionQuestionBar.css';

function RevisionQuestionBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('all'); // Default dropdown option

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFetchQuestion = () => {
    // You can implement the logic to fetch questions here.
    // For demonstration purposes, we'll log the selected option and search term.
    console.log('Selected Option:', selectedOption);
    console.log('Search Term:', searchTerm);
  };

  return (
    <div className="RevisionQuestionBar">
      <div className="search-container">
        <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="notAttempted">Not Attempted questions</option>
          <option value="7Days">7 day overdue</option>
          <option value="15Days">15 day overdue</option>
          <option value="25Days">25 day overdue</option>
          <option value="lessThan80Accuracy">Question with less than 80% accuracy</option>
        </select>
        <button onClick={handleFetchQuestion}>Search</button>
      </div>
    </div>
  );
}

export default RevisionQuestionBar;
