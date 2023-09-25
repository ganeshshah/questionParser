import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
  const [numQuestions, setNumQuestions] = useState('');
  const [flag, setFlag] = useState('all'); // Initialize with 'all'
  const [subject, setSubject] = useState('all');
  const [accuracy, setAccuracy] = useState('all');
  const [month, setMonth] = useState('all');

  const navigate = useNavigate();
  const navigateToSearch = () => {
    // 👇️ navigate to /contacts
    navigate('/searchWithParam' , { state: { numQuestions, flag, subject, accuracy, month } });
  };

  const months = [
    { value: 'JAN', label: 'January' },
    { value: 'FEB', label: 'February' },
    { value: 'MAR', label: 'March' },
    { value: 'APR', label: 'April' },
    { value: 'MAY', label: 'May' },
    { value: 'JUNE', label: 'June' },
    { value: 'JULY', label: 'July' },
    { value: 'AUG', label: 'August' },
    { value: 'SEPT', label: 'September' },
    { value: 'OCT', label: 'October' },
    { value: 'NOV', label: 'November' },
    { value: 'DEC', label: 'December' },
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
            <option value="FINANCE">Finance</option>
            <option value="MANAGEMENT">Management</option>
            <option value="ESI">ESI</option>
            <option value="PIB24X7">PIB24X7</option>
            <option value="RBI24X7">RBI24X7</option>
            <option value="GA">General Awareness</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="accuracy">Accuracy:</label>
          <select
            id="accuracy"
            value={accuracy}
            onChange={(e) => setAccuracy(e.target.value)}
          >
            <option value="0">None</option>
            <option value="90">Less than 90%</option>
            <option value="80">Less than 80%</option>
            <option value="70">Less than 70%</option>
            <option value="60">Less than 60%</option>
            <option value="50">Less than 50%</option>
            <option value="40">Less than 40%</option>
            <option value="30">Less than 30%</option>
            <option value="20">Less than 20%</option>
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

        <button type="submit" className="fetch-button" onClick={navigateToSearch}>
          Fetch Question
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
