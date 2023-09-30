import React from 'react';
import PieChart from './component/PieChart';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import './css/EndTest.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchtestResult } from '../../services'

function EndTest() {

  const location = useLocation();
  const totalTime = location.state.timer / 60;
  const totalTimeTaken = totalTime.toFixed(2);
  const testId = location.state.testId;
  const subject = location.state.subject;


  const [testResultData, SetTestResultData] = useState([]);

  useEffect(() => {
    //this is a self invoked function to fetch all questions
    (async function () {
      try {
        const resData = await fetchtestResult(testId);
        console.log(resData)
        SetTestResultData(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })()
  }, []);



  console.log(testResultData);
  const qlist = testResultData.incorrectQuestionsList;

  const navigate = useNavigate();
  const navigateToReviewQuestions = () => {
    navigate('/reviewQuestions', { state: { qlist } });
  };


  const data = [
    ["Result", "Percentage"],
    ["Correct", testResultData.correctQuestions],
    ["Mistake", testResultData.incorrectQuestions]
  ];

  const handleReviewClick = () => {
    // Handle the review logic here
    // You can open a modal or navigate to a review page
  };

  return (
    <div className="container">
      <h1>Exam Results</h1>
      <div>
        <p>Total time Spent in exam : {totalTimeTaken} mins</p>
        <p>TestId : {testId}</p>
        <p>Subject : {subject}</p>
      </div>
      <PieChart data={data} />
      <h2>Review Incorrect Questions Again</h2>
      <button className="review-button" onClick={navigateToReviewQuestions}> Review Questions</button>
    </div>
  );
};

export default EndTest;
