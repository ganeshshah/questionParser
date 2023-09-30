import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FilterContainer() {
  const [numQuestions, setNumQuestions] = useState('0');
  const [flag, setFlag] = useState('no');
  const [subject, setSubject] = useState('PIB24X7');
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
        </select>

        <select
          className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >            <option value="FINANCE">Finance</option>
          <option value="MANAGEMENT">Management</option>
          <option value="Esi">Esi</option>
          <option value="Pib24x7">Pib24x7</option>
          <option value="Rbi24x7">Rbi24x7</option>
          <option value="SPOTLIGHT">Spotlight GA</option>
          <option value="CA">Cloud Affairs GA</option>
        </select>

        <select
          className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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

        <select
          className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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


// <div className="search-bar">
//   <form onSubmit={handleSearch}>
//     <div className="form-group">
//       <label htmlFor="numQuestions">No of questions:</label>
//       <input
//         type="number"
//         id="numQuestions"
//         value={numQuestions}
//         onChange={(e) => setNumQuestions(e.target.value)}
//         placeholder="Typeable"
//       />
//     </div>

//     <div className="form-group">
//       <label>Fetch All questions:</label>
//       <select
// value={flag}
// onChange={(e) => setFlag(e.target.value)}
//       >
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>
//     </div>

//     <div className="form-group">
//       <label htmlFor="subject">Subject:</label>
//       <select
// id="subject"
// value={subject}
// onChange={(e) => setSubject(e.target.value)}
//       >
//         <option value="FINANCE">Finance</option>
//         <option value="MANAGEMENT">Management</option>
//         <option value="Esi">Esi</option>
//         <option value="Pib24x7">Pib24x7</option>
//         <option value="Rbi24x7">Rbi24x7</option>
//         <option value="SPOTLIGHT">Spotlight GA</option>
//         <option value="CA">Cloud Affairs GA</option>
//       </select>
//     </div>

//     <div className="form-group">
//       <label htmlFor="accuracy">Accuracy:</label>
//       <select
// id="accuracy"
// value={accuracy}
// onChange={(e) => setAccuracy(e.target.value)}
//       >
// <option value="0">None</option>
// <option value="90">Less than 90%</option>
// <option value="80">Less than 80%</option>
// <option value="70">Less than 70%</option>
// <option value="60">Less than 60%</option>
// <option value="50">Less than 50%</option>
// <option value="40">Less than 40%</option>
// <option value="30">Less than 30%</option>
// <option value="20">Less than 20%</option>
//       </select>
//     </div>

//     <div className="form-group">
//       <label htmlFor="month">Month:</label>
//       <select
// id="month"
// value={month}
// onChange={(e) => setMonth(e.target.value)}
//       >
// {months.map((month) => (
//   <option key={month.value} value={month.value}>
//     {month.label}
//   </option>
// ))}
//       </select>

//     </div>

// <button type="submit" className="fetch-button" onClick={navigateToSearch}>
//   Fetch Question
// </button>

// <button type="submit" className="fetch-button" style={{ background: 'green' }} onClick={navigateToCreatetest}>
//   Create Test
// </button>
//   </form>
// </div>