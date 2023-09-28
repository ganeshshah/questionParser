import React, { useEffect, useState } from "react";
import FixedTestHeader from "../components/FixedTestHeader";
import AllQuestions from "./AllQuestions";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { fetchTestId } from '../services'

function TakeTest() {

  const location = useLocation();
  const [testIdObject, setTestIdObject] = useState([]);

  // const apiPath = 'http://localhost:8080/test/createTestId?' + 'subject=' + location.state.subject + '&month=' + location.state.month;
  // Create an async function to fetch and set the data
  // const fetchData = async () => {

  //   try {
  //     const response = await axios.get(apiPath);
  //     // Assuming the response data is JSON, set it to testIdObject
  //     setTestIdObject(response.data);
  //   } catch (error) {
  //     // Handle errors here, e.g., display an error message to the user
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(testIdObject);



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