import React, { useEffect, useState } from "react";
import FixedTestHeader from "../components/FixedTestHeader";
import AllQuestions from "./AllQuestions";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { fetchTestId } from '../services'

function TakeTest() {

  const location = useLocation();
  const [testIdObject, setTestIdObject] = useState([]);
  
  useEffect(() => {
    //this is a self invoked function to fetch all questions
    (async function () {
      try {
        const resData = await fetchTestId(location.state.subject, location.state.month);
        console.log(resData)
        setTestIdObject(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })()
  }, []);


  return (
    <div>
      <FixedTestHeader testIdObject={testIdObject} />
      <AllQuestions testIdObject={testIdObject} />
    </div>
  );
}
export default TakeTest