import React, { useEffect, useState } from "react";
import FixedTestHeader from "./components/FixedTestHeader";
import AllQuestions from "./AllQuestions";
import { useLocation } from 'react-router-dom';
import axios from 'axios';


function TakeTest() {

    // set state
  const location = useLocation();
  const apiPath = 'http://localhost:8080/test/createTestId?'+'subject='+ location.state.subject +'&month=' + location.state.month;
  const [testIdObject, setTestIdObject] = useState([]);

    // Create an async function to fetch and set the data
    const fetchData = async () => {
      try {
        const response = await axios.get(apiPath);
        // Assuming the response data is JSON, set it to testIdObject
        setTestIdObject(response.data);
      } catch (error) {
        // Handle errors here, e.g., display an error message to the user
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

return (
    <div>
      <FixedTestHeader testIdObject={testIdObject}/>
      <AllQuestions testIdObject={testIdObject}/>
    </div>
  );
}
export default TakeTest