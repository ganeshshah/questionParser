import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Pib24x7 from './views/Pib24x7/Pib24x7'; // Assuming you have a PIB24x7 component
import AllQuestions from './views/AllQuestions/AllQuestions';
import Finance from './views/Finance/Finance';
import Rbi24x7 from './views/Rbi24x7/Rbi24x7';
import Management from './views/Management/Management';
import Esi from './views/Esi/Esi';
import SpotlightGA from './views/SpotLightGa/SpotlightGA';
import CloudAffairsGA from './views/CloudAffairsGA/CloudAffairsGA';
import SearchQuestionsWithParams from './views/SearchQuestionsWithParams/SearchQuestionWithParams';
import CreateTest from './views/CreateTest/CreateTest';
import EndTest from './views/EndTestViews/EndTest';
import ReviewQuestions from './views/EndTestViews/component/ReviewQuestions';
import LoadQuestions from './views/LoadQuestions/LoadQuestions';
import EditForm from './components/EditForm'
import ReviseDashBoard from './views/RevisionStrategy/components/ReviseDashBoard';
import SidebarLayout from './components/SidebarLayout'
import RevisionSearchBar from './views/RevisionStrategy/RevisionSearchBar';
import Revise from './views/RevisionStrategy/Revise';
import ReviseQuestion from './views/RevisionStrategy/components/ReviseQuestion';
import ShowAnalytics from './views/AnalyticsDashboard/ShowAnalytics';

function App() {
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pib24x7" element={<Pib24x7 />} />
        <Route path="/all_questions" element={<AllQuestions />} />
        <Route path="/edit_form" element={<EditForm />} />
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
      </Route>
    </Routes>
  );
}

export default App;
