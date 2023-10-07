import React, { useEffect, useState } from "react";
import RenderQuestions from "../../../components/RenderQuestions";
import { useLocation } from 'react-router-dom';
import Loading from '../../../components/Loading'

function ReviewQuestions() {
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState([false]);
  const questionList = location.state.qlist;

  var queryParams = "";

  questionList.forEach(item => {
    queryParams += item + ",";
  });

  const apiPath = location.state.path + queryParams;


  useEffect(() => {
    //TODO: call api function created in services file in root directory instead of directly calling api here

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(apiPath);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuestions(data); // set data to state
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors here
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading &&
        <Loading />}
      <h1 className="p-2 text-center">Mistake questions to review</h1>
      <RenderQuestions questions={questions} />
    </>
  );
}
export default ReviewQuestions