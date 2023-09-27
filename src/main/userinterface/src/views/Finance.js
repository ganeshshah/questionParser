import React from 'react';
import './Home.css';
import SearchBar from '../components/FilterComponent';

function Finance() {
  return (
    <div className="Home">
      <h1>MCQ Practice for Finance</h1>
      <SearchBar />
    </div>
  );
}

export default Finance;