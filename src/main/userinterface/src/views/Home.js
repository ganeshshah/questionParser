import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import QuestionLoader from './loadQuestions/QuestionLoader';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

function Home() {

  const navigate = useNavigate();
  const navigateLoadQuestions = () => {
    navigate('/loadQuestions');
  };

  const nums = [1, 2, 3];

  return (
    <div className="Home">
      <h1>MCQ Practice</h1>
      <h3>Created this portal to do spaced repetition</h3>
      <div className='mx-auto my-5 max-w-5xl flex flex-col gap-y-8'>
        {
          nums.map(() => (<QuestionCard />))
        }
      </div >
    </div >
  );
}

export default Home;


