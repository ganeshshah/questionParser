import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [numQuestions, setNumQuestions] = useState('');
  const [flag, setFlag] = useState('all'); // Initialize with 'all'
  const [subject, setSubject] = useState('all');
  const [accuracy, setAccuracy] = useState('all');
  const [month, setMonth] = useState('all');

  const months = [
    { value: 'jan', label: 'January' },
    { value: 'feb', label: 'February' },
    { value: 'mar', label: 'March' },
    { value: 'apr', label: 'April' },
    { value: 'may', label: 'May' },
    { value: 'jun', label: 'June' },
    { value: 'jul', label: 'July' },
    { value: 'aug', label: 'August' },
    { value: 'sep', label: 'September' },
    { value: 'oct', label: 'October' },
    { value: 'nov', label: 'November' },
    { value: 'dec', label: 'December' },
  ];


  const handleSearch = (e) => {
    e.preventDefault();

    console.log('Number of Questions:', numQuestions);
    console.log('Flag:', flag);
    console.log('Subject:', subject);
    console.log('Accuracy:', accuracy);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="numQuestions">No of questions:</label>
          <input
            type="number"
            id="numQuestions"
            value={numQuestions}
            onChange={(e) => setNumQuestions(e.target.value)}
            placeholder="Typeable"
          />
        </div>

        <div className="form-group">
          <label>Fetch All questions:</label>
          <select
            value={flag}
            onChange={(e) => setFlag(e.target.value)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="finance">Finance</option>
            <option value="management">Management</option>
            <option value="esi">ESI</option>
            <option value="pib247">PIB24X7</option>
            <option value="rbi247">RBI24X7</option>
            <option value="ga">General Awareness</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="accuracy">Accuracy:</label>
          <select
            id="accuracy"
            value={accuracy}
            onChange={(e) => setAccuracy(e.target.value)}
          >
            <option value="none">None</option>
            <option value="lessThan90">Less than 90%</option>
            <option value="lessThan80">Less than 80%</option>
            <option value="lessThan70">Less than 70%</option>
            <option value="lessThan60">Less than 60%</option>
            <option value="lessThan50">Less than 50%</option>
            <option value="lessThan40">Less than 40%</option>
            <option value="lessThan30">Less than 30%</option>
            <option value="lessThan20">Less than 20%</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="month">Month:</label>
          <select
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>

        </div>

        <button type="submit" className="fetch-button">
          Fetch Question
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
