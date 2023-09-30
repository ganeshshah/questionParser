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
import SpotlightGA from './views/SpotlightGA';
import CloudAffairsGA from './views/CloudAffairsGA';
import QuestionsWithParams from './views/QuestionWithParams';
import TakeTest from './views/TakeTest';
import EndTest from './views/endTestViews/EndTest';
import ReviewQuestions from './views/endTestViews/ReviewQuestions';
import LoadQuestionsPage from './views/loadQuestions/LoadQuestionsPage';
import EditForm from './components/EditForm'
import RevisionBlock from './views/RevisionStrategy/RevisionBlock';
import SidebarLayout from './components/SidebarLayout'
import RevisionSearchBar from './views/RevisionStrategy/RevisionSearchBar';
import Revise from './views/RevisionStrategy/Revise';
import QuestionSearchForRevision from './views/RevisionStrategy/QuestionSearchForRevision';
import ShowAnalytics from './views/AnalyticsDashboard/ShowAnalytics';

function App() {
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/PIB24x7" element={<PIB24X7 />} />
        <Route path="/all_questions" element={<AllQuestions />} />
        <Route path="/EditForm" element={<EditForm />} />
        <Route path="/Finance" element={<Finance />} />
        <Route path="/RBI24x7" element={<RBI24X7 />} />
        <Route path="/Management" element={<Management />} />
        <Route path="/ESI" element={<ESI />} />
        <Route path="/SpotlightGA" element={<SpotlightGA />} />
        <Route path="/CloudAffairsGA" element={<CloudAffairsGA />} />
        <Route path="/searchWithParam" element={<QuestionsWithParams />} />
        <Route path="/createTest" element={<TakeTest />} />
        <Route path="/endTestPage" element={<EndTest />} />
        <Route path="/reviewQuestions" element={<ReviewQuestions />} />
        <Route path="/loadQuestions" element={<LoadQuestionsPage />} />
        <Route path="/ReviseDashBoard" element={<RevisionBlock />} />
        <Route path="/RevisionSearchBar" element={<RevisionSearchBar />} />
        <Route path="/Revise" element={<Revise />} />
        <Route path="/ReviseQuestion" element={<QuestionSearchForRevision />} />
        <Route path="/showAnalytics" element={<ShowAnalytics />} />
      </Route>
    </Routes>
  );
}

export default App;
