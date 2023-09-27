import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import QuestionLoader from './loadQuestions/QuestionLoader';
import {useNavigate} from 'react-router-dom';


function Home() {

  const navigate = useNavigate();
  const navigateLoadQuestions = () => {
    navigate('/loadQuestions');
  };

  return (
    <div className="Home">
      <h1>MCQ Practice</h1>
      <h3>Created this portal to do spaced repetition</h3>
      <div>
        <ul className="menu-list">
          <li>
            <Link to="/Finance">Finance</Link>
          </li>
          <li>
            <Link to="/management">Management</Link>
          </li>
          <li>
            <Link to="/esi">ESI</Link>
          </li>
          <li>
            <Link to="/PIB24x7">PIB24x7</Link>
          </li>
          <li>
            <Link to="/RBI24x7">RBI24x7</Link>
          </li>
          <li>
            <Link to="/SpotlightGA">General Awareness</Link>
          </li>
          <li>
            <Link to="/CloudAffairsGA">Cloudaffairs GA</Link>
          </li>
          <li>
            <Link to="/esi">Create Mixed Test</Link>
          </li>
          <li>
            <Link to="/esi">Analytics dashboard</Link>
          </li>
        </ul>
        <div>
        <button className='buttons'>Add Question Manually</button>
        <button className='buttons'> Load Question from excel</button>
        <button className='buttons' onClick={navigateLoadQuestions}>Load Question from text file</button>
        </div>
      </div>
    </div>
  );
}

export default Home;


