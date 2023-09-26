import React, { useEffect, useState } from "react";
import RenderQuestions from "../components/RenderQuestions";
import { useLocation } from 'react-router-dom';

function ReviewQuestions() {
// set state
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const questionList = location.state.qlist;

  console.log(questionList);

var queryParams = "";
questionList.forEach(item => {
  queryParams += item + ",";
});
  const apiPath = 'http://localhost:8080/getIncorrectQuestions?ids=' + queryParams;
  

// first data grab
  useEffect(() => {
    fetch(apiPath) // your url may look different
      .then(resp => resp.json())
      .then(data => setQuestions(data)) // set data to state
  }, []);

return (
    <div>
        <h1>-----------------------------------------------------------------Mistake questions to review-----------------------------------------------------</h1>
      <RenderQuestions questions={questions} />
    </div>
  );
}
export default ReviewQuestions