import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Pib24x7 from './views/pib247/Pib24x7';
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
import LoadQuestionsFromText from './views/loadQuestions/LoadQuestionsFromText';
import ReviseDashBoard from './views/revisionStrategy/components/ReviseDashBoard';
import SidebarLayout from './components/SidebarLayout'
import Layout from './components/Layout'
import Revise from './views/revisionStrategy/Revise';
import ReviseQuestion from './views/revisionStrategy/components/ReviseQuestion';
import ShowAnalytics from './views/analyticsDashboard/ShowAnalytics';
import AddQuestion from './views/addQuestion/AddQuestion'
import CreateMixedTest from "./views/createMixedTest/CreateMixedTest";
import LoadQuestionFromExcel from "./views/loadQuestionFromExcel/LoadQuestionfromExcel";
import QuantAndReasoning from "./views/quantAndreasoning/QuantAndReasoning";
import SearchQreQuestionWithParams from "./views/quantAndreasoning/components/SearchQreQuestionWithParams";
import CreateQreTest from "./views/quantAndreasoning/components/CreateQreTest";

function App() {
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
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
          <Route path="/create_qre_test" element={<CreateQreTest />} />
          <Route path="/end_test" element={<EndTest />} />
          <Route path="/review_questions" element={<ReviewQuestions />} />
          <Route path="/load_questions_from_text" element={<LoadQuestionsFromText />} />
          <Route path="/revise_dashboard" element={<ReviseDashBoard />} />
          <Route path="/revise" element={<Revise />} />
          <Route path="/revise_question" element={<ReviseQuestion />} />
          <Route path="/show_analytics" element={<ShowAnalytics />} />
          <Route path="/add_question" element={<AddQuestion />} />
          <Route path="/create_mixed_test" element={<CreateMixedTest />} />
          <Route path="/load_question_from_excel" element={<LoadQuestionFromExcel />} />
          <Route path="/quant_and_reasoning" element={<QuantAndReasoning />} />
          <Route path="/search_qre_questions_with_params" element={<SearchQreQuestionWithParams />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
