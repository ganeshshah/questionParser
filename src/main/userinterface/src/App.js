import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import PIB24X7 from './views/PIB24X7'; // Assuming you have a PIB24x7 component
import AllQuestions from './views/AllQuestions';
import Finance from './views/Finance';
import RBI24X7 from './views/RBI24X7';
import Management from './views/Management';
import ESI from './views/ESI';
import GeneralAwareness from './views/GeneralAwareness';
import CloudAffairsGA from './views/CloudAffairsGA';
import QuestionsWithParams from './views/QuestionWithParams';
import TakeTest from './views/TakeTest';
import EndTest from './views/endTestViews/EndTest';
import ReviewQuestions from './views/endTestViews/ReviewQuestions';
import QuestionLoader from './views/loadQuestions/QuestionLoader';
import Layout from './components/Layout';
import EditForm from './components/EditForm'
import RevisionBlock from './views/RevisionStrategy/RevisionBlock';
import SidebarLayout from './components/SidebarLayout'

function App() {
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/PIB24x7" element={<PIB24X7 />} />
        <Route path="/Questions" element={<AllQuestions />} />
        <Route path="/EditForm" element={<EditForm />} />
        <Route path="/Finance" element={<Finance />} />
        <Route path="/RBI24x7" element={<RBI24X7 />} />
        <Route path="/Management" element={<Management />} />
        <Route path="/ESI" element={<ESI />} />
        <Route path="/SpotlightGA" element={<GeneralAwareness />} />
        <Route path="/CloudAffairsGA" element={<CloudAffairsGA />} />
        <Route path="/searchWithParam" element={<QuestionsWithParams />} />
        <Route path="/createTest" element={<TakeTest />} />
        <Route path="/endTestPage" element={<EndTest />} />
        <Route path="/reviewQuestions" element={<ReviewQuestions />} />
        <Route path="/loadQuestions" element={<QuestionLoader />} />
        <Route path="/ReviseDashBoard" element={<RevisionBlock />} />
      </Route>
    </Routes>
  );
}

export default App;
