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

  // Make the API request using Axios
  useEffect(() => {
    axios.get(apiPath) // your API endpoint URL
      .then(response => {
        // Assuming the response data is JSON
        setTestIdObject(response.data);
      })
      .catch(error => {
        // Handle errors here
        console.error('Error fetching data:', error);
      });
  }, []);

return (
    <div>
      <FixedTestHeader testIdObject={testIdObject}/>
      <AllQuestions testIdObject={testIdObject}/>
    </div>
  );
}
export default TakeTest