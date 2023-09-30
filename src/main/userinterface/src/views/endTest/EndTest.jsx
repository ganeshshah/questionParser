import React from 'react';
import PieChart from './components/PieChart';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchtestResult } from '../../services'
import Loading from '../../components/Loading'

function EndTest() {
  const navigate = useNavigate();
  const location = useLocation();
  const totalTime = location.state.timer / 60;
  const totalTimeTaken = totalTime.toFixed(2);
  const testId = location.state.testId;
  const subject = location.state.subject;
  const [testResultData, SetTestResultData] = useState([]);
  const [loading, setLoading] = useState([false]);
  const qlist = testResultData.incorrectQuestionsList;

  const data = [
    ["Result", "Percentage"],
    ["Correct", testResultData.correctQuestions],
    ["Mistake", testResultData.incorrectQuestions]
  ];

  useEffect(() => {
    //this is a self invoked function to fetch all questions
    (async function () {
      setLoading(true)
      try {
        const resData = await fetchtestResult(testId);
        console.log(resData)
        SetTestResultData(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false)
      }
    })()
  }, []);

  const navigateToReviewQuestions = () => {
    if (qlist) {
      navigate('/review_questions', { state: { qlist } });
    } else {
      console.log('no questions to review')
    }
  }

  const onReviewClickHandler = () => {
  };

  return (
     <>
      {loading &&
        <Loading />}
    <div className="max-w-3xl mx-auto p-4 text-center bg-gray-200 rounded-lg shadow-md">
      <p className='text-lg text-bold'>Exam Results</p>
      <div className='p-2'>
        <p>Subject : {subject}</p>
        <p>TestId : {testId}</p>
        <p>Total time Spent in exam : {totalTimeTaken} mins</p>
      </div>
      <PieChart data={data} />
      <p className='p2 text-lg text-bold'>Review Incorrect Questions Again</p>
      <button onClick={navigateToReviewQuestions} className="px-4 mt-2 py-2 bg-blue-500 text-white rounded-md cursor-pointer whitespace-nowrap" > Review Questions</button>
      </div>
    </>
  );
};

export default EndTest;
