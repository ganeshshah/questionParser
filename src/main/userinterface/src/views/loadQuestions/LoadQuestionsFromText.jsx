import React, { useState } from 'react';
// import './QuestionLoader.css';
import axios from 'axios';
import { loadQuestions } from '../../services'

function LoadQuestionsFromText() {

  const [questionPath, setQuestionPath] = useState('');
  const [answerPath, setAnswerPath] = useState('');
  const [selectedParser, setSelectedParser] = useState('PIB24X7');
  const [selectedSubject, setSelectedSubject] = useState('PIB24X7');
  const [selectedMonth, setSelectedMonth] = useState('AUG');

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

  const handleLoadQuestions = async () => {
    const dataToSend = {
      questionPath: questionPath,
      answerPath: answerPath,
      selectedParser: selectedParser,
      selectedSubject: selectedSubject,
      selectedMonth: selectedMonth
    };
    console.log(dataToSend);

    try {
      const resData = await loadQuestions(dataToSend);
      console.log(resData)
    } catch (error) {
      console.error("Error post data:", error);
    }
  };


  return (
    <div >
      <h1>Load questions</h1>

      <div className="max-w-sm mx-auto p-6 rounded-lg shadow-xl">
        <div className="flex flex-col gap-4">
          <input
            className='px-2 py-2 appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
            placeholder="Question Path"
            value={questionPath}
            onChange={(e) => setQuestionPath(e.target.value)}
          />
          <div className='flex flex-col'>
            <input
              className='px-2 py-2 appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
              placeholder="Answer Path"
              value={answerPath}
              onChange={(e) => setAnswerPath(e.target.value)}
            />
            <p className='text-sm text-red-500 self-end'>*Answer path required only for spotlight parser</p>
          </div>
          <select
            className="h-full px-2 py-2 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedParser}
            onChange={(e) => setSelectedParser(e.target.value)}
          >
            <option value="PIB24X7">Pib24x7 Parser</option>
            <option value="RBI24X7">Rbi24x7 Parser</option>
            <option value="SPOTLIGHT">Spotlight Parser</option>
            <option value="CA">Cloudaffairs Parser</option>
          </select>
          <select
            className="h-full px-2 py-2 bg-white border border-gray-300 hover:border-gray-400  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="FINANCE">Finance</option>
            <option value="MANAGEMENT">Management</option>
            <option value="ESI">Esi</option>
            <option value="PIB24X7">Pib24x7</option>
            <option value="RBI24X7">Rbi24x7</option>
            <option value="SPOTLIGHT">Spotlight GA</option>
            <option value="CA">Cloud Affairs GA</option>
          </select>

          <select
            className="h-full px-2 py-2 bg-white border border-gray-300 hover:border-gray-400  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
          <button className=' text-xs bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-md' onClick={handleValidateFormat}>Validate Format</button>
          <button className='text-xs bg-green-500 hover:bg-green-800  text-white font-bold py-2 px-4 rounded-md' onClick={handleLoadQuestions}>Load Questions</button>
        </div>
      </div>
    </div>
  );
}

export default LoadQuestionsFromText;
