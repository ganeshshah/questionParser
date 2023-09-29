import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import RenderQuestions from "../../components/RenderQuestions";


function QuestionSearchForRevision() {

  const location = useLocation();
  const questions = location.state.questions;
  console.log(questions);
  
  return (
    <div>
      <RenderQuestions questions={questions} />
    </div>
  );
}
export default QuestionSearchForRevision