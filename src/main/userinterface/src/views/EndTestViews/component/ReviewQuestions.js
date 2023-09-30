import React, { useEffect, useState } from "react";
import RenderQuestions from "../../../components/RenderQuestions";
import { useLocation } from 'react-router-dom';

function ReviewQuestions() {
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const questionList = location.state.qlist;

  console.log(questionList);

  var queryParams = "";
  questionList.forEach(item => {
    queryParams += item + ",";
  });
  const apiPath = 'http://localhost:8080/getIncorrectQuestions?ids=' + queryParams;


  useEffect(() => {
    //TODO: call api function created in services file in root directory instead of directly calling api here

    const fetchData = async () => {
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
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Mistake questions to review</h1>
      <RenderQuestions questions={questions} />
    </div>
  );
}
export default ReviewQuestions