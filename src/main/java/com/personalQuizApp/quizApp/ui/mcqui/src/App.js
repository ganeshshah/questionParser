import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import PIB24X7 from './views/PIB24X7'; // Assuming you have a PIB24x7 component
import AllQuestions from './views/AllQuestions';
import EditForm from './views/components/EditForm';
import Finance from './views/Finance';
import RBI24X7 from './views/RBI24X7';
import Management from './views/Management';
import ESI from './views/ESI';
import GeneralAwareness from './views/GeneralAwareness';
import CloudAffairsGA from './views/CloudAffairsGA';
import QuestionsWithParams from './views/QuestionWithParams';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
