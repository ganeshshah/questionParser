import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Pib24x7 from './views/pib247/Pib24x7'; // Assuming you have a PIB24x7 component
import AllQuestions from './views/allQuestions/AllQuestions';
import Finance from './views/finance/Finance';
import Rbi24x7 from './views/rbi24x7/Rbi24x7';
import Management from './views/management/Management';
import Esi from './views/esi/Esi';
import SpotlightGA from './views/spotLightGa/SpotlightGA';
import CloudAffairsGA from './views/cloudAffairsGA/CloudAffairsGA';
import SearchQuestionsWithParams from './views/searchQuestionsWithParams/SearchQuestionWithParams';
import CreateTest from './views/createTest/CreateTest.jsx';
import EndTest from './views/endTest/EndTest';
import ReviewQuestions from './views/endTest/components/ReviewQuestions';
import LoadQuestions from './views/loadQuestions/LoadQuestions';
import ReviseDashBoard from './views/revisionStrategy/components/ReviseDashBoard';
import SidebarLayout from './components/SidebarLayout'
import RevisionSearchBar from './views/revisionStrategy/RevisionSearchBar';
import Revise from './views/revisionStrategy/Revise';
import ReviseQuestion from './views/revisionStrategy/components/ReviseQuestion';
import ShowAnalytics from './views/analyticsDashboard/ShowAnalytics';
import AddQuestion from './views/addQuestion/AddQuestion'

function App() {
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pib24x7" element={<Pib24x7 />} />
        <Route path="/all_questions" element={<AllQuestions />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/rbi24x7" element={<Rbi24x7 />} />
        <Route path="/management" element={<Management />} />
        <Route path="/esi" element={<Esi />} />
        <Route path="/spotlight_ga" element={<SpotlightGA />} />
        <Route path="/cloudaffairs_ga" element={<CloudAffairsGA />} />
        <Route path="/search_questions_with_params" element={<SearchQuestionsWithParams />} />
        <Route path="/create_test" element={<CreateTest />} />
        <Route path="/end_test" element={<EndTest />} />
        <Route path="/review_questions" element={<ReviewQuestions />} />
        <Route path="/load_questions" element={<LoadQuestions />} />
        <Route path="/revise_dashboard" element={<ReviseDashBoard />} />
        <Route path="/revision_searchbar" element={<RevisionSearchBar />} />
        <Route path="/revise" element={<Revise />} />
        <Route path="/revise_question" element={<ReviseQuestion />} />
        <Route path="/show_analytics" element={<ShowAnalytics />} />
        <Route path="/add_question" element={<AddQuestion />} />
      </Route>
    </Routes>
  );
}

export default App;
