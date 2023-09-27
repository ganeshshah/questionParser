import React, { useState } from 'react';
import './QuestionLoader.css';
import axios from 'axios';

function QuestionLoader() {

  const [questionPath, setQuestionPath] = useState('');
  const [answerPath, setAnswerPath] = useState('');
  const [selectedParser, setSelectedParser] = useState('PIB24X7');
  const [selectedSubject, setSelectedSubject] = useState('PIB24X7');
  const [selectedMonth, setSelectedMonth] = useState('AUG');
  const apiPath = "http://localhost:8080/proccessFile";

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



  const handleValidateFormat = () => {
    
  };

  const handleLoadQuestions = () => {
    const dataToSend = {
        questionPath: questionPath,
        answerPath: answerPath,
        selectedParser: selectedParser,
        selectedSubject: selectedSubject,
        selectedMonth: selectedMonth
      };
    console.log(dataToSend);

      // Send a POST request
 axios.post(apiPath, dataToSend)
 .then((response) => {
   console.log('POST request successful:', response.data);
   // Handle the response as needed
 })
 .catch((error) => {
   console.error('Error making POST request:', error);
   // Handle errors
 });
  };


  return (
    <div className="app">
        <h1>Load questions</h1>
        <p>**Answer path required only for spotlight parser</p>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Question Path"
          value={questionPath}
          onChange={(e) => setQuestionPath(e.target.value)}
        />
        <input
          type="text"
          placeholder="Answer Path"
          value={answerPath}
          onChange={(e) => setAnswerPath(e.target.value)}
        />
        <select
          value={selectedParser}
          onChange={(e) => setSelectedParser(e.target.value)}
        >
          <option value="PIB24X7">PIB24X7 Parser</option>
          <option value="RBI24X7">RBI24X7 Parser</option>
          <option value="SPOTLIGHT">Spotlight Parser</option>
          <option value="CA">Cloudaffairs Parser</option>
        </select>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="FINANCE">Finance</option>
          <option value="MANAGEMENT">Management</option>
          <option value="ESI">ESI</option>
          <option value="PIB24X7">PIB24X7</option>
          <option value="RBI24X7">RBI24X7</option>
          <option value="SPOTLIGHT">Spotlight GA</option>
          <option value="CA">Cloud Affairs GA</option>
        </select>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
        <button onClick={handleValidateFormat}>Validate Format</button>
        <button onClick={handleLoadQuestions}>Load Questions</button>
      </div>
    </div>
  );
}

export default QuestionLoader;
