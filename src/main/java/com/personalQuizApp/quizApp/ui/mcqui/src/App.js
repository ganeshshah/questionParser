import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Finance from "./views/Finance";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>MCQ Practice</h1>
        <h3>Created this portal to do spaced repetition</h3>
        <div>
        <ul className="menu-list">
          <li>
            <a href="/Finance" target="_blank">Finance</a>
          </li>
          <li>
            <Link to="/management">Management</Link>
          </li>
          <li>
            <Link to="/esi">ESI</Link>
          </li>
          <li>
            <Link to="/esi">PIB24x7</Link>
          </li>
          <li>
            <Link to="/esi">RBI24x7</Link>
          </li>
          <li>
            <Link to="/esi">General Awareness</Link>
          </li>
          <li>
            <Link to="/esi">Create Mixed Test</Link>
          </li>
          <li>
            <Link to="/esi">Analytics dashboard</Link>
          </li>
        </ul>
        </div>
        <Routes>
          <Route path="/Finance" element={<Finance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
