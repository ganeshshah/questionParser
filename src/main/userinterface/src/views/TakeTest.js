import React, { useEffect, useState } from "react";
import QuestionsWithParams from "./QuestionWithParams";
import FixedTestHeader from "./components/FixedTestHeader";
import AllQuestions from "./AllQuestions";
import { useLocation } from 'react-router-dom';


function TakeTest() {

    // set state
  const location = useLocation();
  const [testIdObject, setTestIdObject] = useState([]);
  const apiPath = 'http://localhost:8080/test/createTestId?'+'subject='+ location.state.subject +'&month=' + location.state.month;

// first data grab
  useEffect(() => {
    fetch(apiPath) // your url may look different
      .then(resp => resp.json())
      .then(data => setTestIdObject(data)) // set data to state
  }, []);

return (
    <div>
      <FixedTestHeader testIdObject={testIdObject}/>
      <AllQuestions testIdObject={testIdObject}/>
    </div>
  );
}
export default TakeTest