import React from 'react';
import './Home.css';
import SearchBar from '../components/FilterComponent';

function Management() {
  return (
    <div className="Home">
      <h1>MCQ Practice for Management</h1>
      <SearchBar />
    </div>
  );
}

export default Management;