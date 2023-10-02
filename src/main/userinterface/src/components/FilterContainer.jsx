import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MONTHS, SUBJECTS, ACCURACY } from '../common/constants'
import getSubjectFromPath from '../common/SubjectFromPath'

function FilterContainer() {
  const [numQuestions, setNumQuestions] = useState('0');
  const [flag, setFlag] = useState('no');
  const [subject, setSubject] = useState(getSubjectFromPath());
  const [accuracy, setAccuracy] = useState('0');
  const [month, setMonth] = useState('AUG');

  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate('/search_questions_with_params', { state: { numQuestions, flag, subject, accuracy, month } });
  };

  const navigate2 = useNavigate();
  const navigateToCreatetest = () => {
    navigate2('/create_test', { state: { numQuestions, flag, subject, accuracy, month } });
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Number of Questions:', numQuestions);
    console.log('Flag:', flag);
    console.log('Subject:', subject);
    console.log('Accuracy:', accuracy);
  };

  return (
    <div className='border border-green-200 rounded-lg p-2 w-full flex flex-col gap-2' >
      <div className="flex lg:flex-row flex-col mb-1 sm:mb-0 gap-2">
        <input
          className=' w-full px-2 py-1 appearance-none rounded border border-gray-400 border-b block  bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
          type="number"
          id="numQuestions"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
          placeholder="Typeable"
        />
        <select
          className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={flag}
          onChange={(e) => setFlag(e.target.value)}
        >
          <option value="yes">All</option>
          <option value="no">Not all</option>
          <option value="0">Not Attempted Yet</option>
          <option value="1">Attempted Once</option>
          <option value="2">Attempted twice</option>
          <option value="3">Attempted thrice</option>
          <option value="4">Attempted fourth time</option>
        </select>

        <select
          className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="subject"
          value={subject}
          readOnly
        >
          {SUBJECTS.map((subject) => (
            <option disabled key={subject} value={subject}>{subject}</option>
          )
          )}
        </select>

        <select
          className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="accuracy"
          value={accuracy}
          onChange={(e) => setAccuracy(e.target.value)}
        >
          <option value="0">None</option>
          {ACCURACY.map((a) => (
            <option key={a} value={a}>Less than {a}%</option>
          ))}
        </select>

        <select
          className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          {MONTHS.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>


      </div>
      <div className='flex lg:flex-row flex-col justify-end gap-2'>
        <button className="text-xs bg-blue-500 hover:bg-blue-700  text-white  py-1 px-3 rounded-md whitespace-nowrap" type="submit" onClick={navigateToSearch}>
          Fetch Question
        </button>

        <button className="text-xs bg-green-500 hover:bg-green-700  text-white  py-1 px-3 rounded-md whitespace-nowrap" type="submit" onClick={navigateToCreatetest}>
          Create Test
        </button>
      </div>
    </div >

  );
}

export default FilterContainer;