import React from 'react';
import './ShowAnalytics.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DoubleBarChart } from './DoubleBarChart';
import { LineChart } from './LineChart';
import { StackedBarChart } from './StackedBarChart';
import { DoughnutChart } from './DoughnutChart';
import MaterialCardQuestion from './MaterialCardQuestion';
import MaterialCardAttempted from './MaterialCardAttempted';
function ShowAnalytics() {

  return (
    <div className="ShowAnalytics">
      <h1>Analytics Dashboard</h1>
      <div>
      <MaterialCardQuestion/> 
      <MaterialCardAttempted/> 
      </div>
      <LineChart />
        <DoubleBarChart />
        <DoughnutChart />
        <StackedBarChart />

    </div >
  );
}

export default ShowAnalytics;
