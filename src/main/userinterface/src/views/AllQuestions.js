import React, { useEffect, useState } from "react";
import RenderQuestions from "./components/RenderQuestions";
import { useLocation } from 'react-router-dom';

function AllQuestions({testIdObject}) {
// set state
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const apiPath = 'http://localhost:8080/getQuestionsWithParam?'+'numQuestions='+ location.state.numQuestions +'&flag='
  +location.state.flag +'&subject='+location.state.subject+'&accuracy='+location.state.accuracy+'&month='+ location.state.month;
// first data grab

async function fetchData(apiPath) {
  try {
    const response = await fetch(apiPath);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

useEffect(() => {
  async function fetchQuestions() {
    try {
      const data = await fetchData(apiPath);
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchQuestions();
}, []);


console.log(testIdObject);

return (
    <div style={{ marginTop: 70}}>
      {/* pass data down to the QuestionBlock component where we'll create the table*/}
      <RenderQuestions questions={questions} testIdObject={testIdObject} />
    </div>
  );
}
export default AllQuestions