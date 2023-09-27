import React from 'react';
import PieChart from './PieChart';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import './EndTest.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function EndTest() {

  const location = useLocation();
  const totalTime = location.state.timer / 60;
  const totalTimeTaken = totalTime.toFixed(2);
  const testId = location.state.testId;
  const subject = location.state.subject;


  const apiPath = 'http://localhost:8080/testData/getTestResultData?testId=' + testId;
  const [testResultData, SetTestResultData] = useState([]);


  // Make the API request using Axios
  useEffect(() => {
    //TODO: call api function created in services file in root directory instead of directly calling api here

    axios.get(apiPath) // your API endpoint URL
      .then(response => {
        // Assuming the response data is JSON
        SetTestResultData(response.data);
      })
      .catch(error => {
        // Handle errors here
        console.error('Error fetching data:', error);
      });
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
