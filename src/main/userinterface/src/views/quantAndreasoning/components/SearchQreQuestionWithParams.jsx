import React, { useEffect, useState } from "react";
import RenderQuestions from "../../../components/RenderQuestions";
import { useLocation } from 'react-router-dom';
import Loading from "../../../components/Loading";
import {fetchQreQuestions} from "../../../services/services";
import RenderQreQuestions from "./RenderQreQuestions";

function SearchQreQuestionWithParams() {
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState([false]);

  const getQuestions = async () => {
    setLoading(true)
    try {
      const resData = await fetchQreQuestions(location.state.numQuestions, location.state.flag, location.state.subject,location.state.chapter, location.state.accuracy, location.state.month, location.state.time, location.state.timeValue);
      console.log(resData)
      setQuestions(resData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getQuestions()
  }, []);

  return (
    <>
      {loading &&
        <Loading />}
      <div style={{ marginTop: 70 }}>
        {/* pass data down to the QuestionBlock component where we'll create the table*/}
        <RenderQreQuestions questions={questions} getQuestions={getQuestions} />
      </div>
    </>
  );
}
export default SearchQreQuestionWithParams