import React, { useState, useEffect } from "react";
import './FixedTestHeader.css';

function FixedTestHeader({testIdObject}) {
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const testId = testIdObject.testId;
  const date = testIdObject.date;

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

  const handleStartClick = () => {
    setIsTimerRunning(true);
  };

  const handleEndClick = () => {
    setIsTimerRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="fixedTestHeader">
      <button style ={{backgroundColor:'green'}} onClick={handleStartClick}>Start test</button>
      <p>Test Id: {testId}</p>
      <div className="timer">{formatTime(timer)}</div>
      <button style ={{backgroundColor:'red'}} onClick={handleEndClick}>End test</button>
    </div>
  );
}

export default FixedTestHeader;
