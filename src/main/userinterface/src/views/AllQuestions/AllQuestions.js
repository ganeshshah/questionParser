import React, { useEffect, useState } from "react";
import RenderQuestions from "../../components/RenderQuestions";
import { useLocation } from 'react-router-dom';
import { fetchQuestions } from '../../services'

function AllQuestions({ testIdObject }) {

  const location = useLocation();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    //this is a self invoked function to fetch all questions
    (async function () {
      try {
        const resData = await fetchQuestions(location.state.numQuestions, location.state.flag, location.state.subject, location.state.accuracy, location.state.month);
        console.log(resData)
        setQuestions(resData)
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })()
  }, []);

  return (
    <div style={{ marginTop: 70 }}>
      {/* pass data down to the QuestionBlock component where we'll create the table*/}
      <RenderQuestions questions={questions} testIdObject={testIdObject} />
    </div>
  );
}
export default AllQuestions