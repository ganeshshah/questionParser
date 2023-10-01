import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../../components/QuestionCard';

function Home() {

  const navigate = useNavigate();
  const navigateLoadQuestions = () => {
    navigate('/LoadQuestions');
  };

  const nums = [1, 2, 3];

  return (
    <div className="Home">
      <h1>MCQ Practice</h1>
      <h3>Created this portal to do spaced repetition</h3>
      <div className='mx-auto my-5 max-w-5xl flex flex-col gap-y-8'>
        To be Implemented
      </div >
    </div >
  );
}

export default Home;

