import React, { useEffect, useState } from "react";
import RenderQuestions from "./components/RenderQuestions";

function AllQuestions() {
// set state
  const [questions, setQuestions] = useState([]);

// first data grab
  useEffect(() => {
    fetch("http://localhost:8080/getQuestions") // your url may look different
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
export default AllQuestions