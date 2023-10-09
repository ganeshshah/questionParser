import React from "react";
import { Chart } from "react-google-charts";



export const options = {
  title: "Subject wise question completed percentage",
  pieHole: 0.4,
  is3D: false,
};

export function DoughnutChart({ analyticsData }) {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={analyticsData}
      options={options}
    />
  );
}
