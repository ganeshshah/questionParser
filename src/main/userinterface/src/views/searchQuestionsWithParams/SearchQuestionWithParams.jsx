import React, { useEffect, useState } from "react";
import RenderQuestions from "../../components/RenderQuestions";
import { useLocation } from 'react-router-dom';
import { fetchQuestions } from '../../services'
import Loading from '../../components/Loading'

function QuestionsWithParams() {
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    //this is a self invoked function to fetch all questions
    (async function () {
      setLoading(true)
      try {
        const resData = await fetchQuestions(location.state.numQuestions, location.state.flag, location.state.subject, location.state.accuracy, location.state.month);
        console.log(resData)
        setQuestions(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    })()
  }, []);

  return (
    <>
      {loading &&
        <Loading />}
      <div style={{ marginTop: 70 }}>
        {/* pass data down to the QuestionBlock component where we'll create the table*/}
        <RenderQuestions questions={questions} />
      </div>
    </>
  );
}
export default QuestionsWithParams