import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function FixedTestHeader({ testIdObject }) {

  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const testId = testIdObject.testId;
  const subject = testIdObject.subject;

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning]);



  const onStartClickHandler = () => {
    setIsTimerRunning(true);
  };

  const onEndClickHandler = () => {
    setIsTimerRunning(false);
    navigate('/end_qre_test', { state: { timer, testId, subject } });
  };



  return (
    <div className="flex justify-between items-center p-2">
      <button className='bg-green-500 px-4 mt-2 py-2  text-white rounded-md cursor-pointer whitespace-nowrap' >
        Test Has Started
      </button>
      <p>Test Id: {testId}</p>
      <div className="font-bold text-slate-600 text-lg">
        {formatTime(timer)}
      </div>
      <button onClick={onEndClickHandler} className='bg-red-500 px-4 mt-2 py-2  text-white rounded-md cursor-pointer whitespace-nowrap' >
        End test
      </button>
    </div>
  );
}

export default FixedTestHeader;
