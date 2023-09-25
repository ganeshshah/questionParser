import React, { useEffect, useState } from "react";
import RenderQuestions from "./components/RenderQuestions";
import { useLocation } from 'react-router-dom';

function QuestionsWithParams() {
// set state
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const apiPath = 'http://localhost:8080/getQuestionsWithParam?'+'numQuestions='+ location.state.numQuestions +'&flag='
  +location.state.flag +'&subject='+location.state.subject+'&accuracy='+location.state.accuracy+'&month='+ location.state.month;

// first data grab
  useEffect(() => {
    fetch(apiPath) // your url may look different
      .then(resp => resp.json())
      .then(data => setQuestions(data)) // set data to state
  }, []);

return (
    <div>
      {/* pass data down to the QuestionBlock component where we'll create the table*/}
      <RenderQuestions questions={questions} />
    </div>
  );
}
export default QuestionsWithParams