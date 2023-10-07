import React from "react";
import { Chart } from "react-google-charts";



export const options = {
  title: "Subject Wise Completion Percentage",
  pieHole: 0.4,
  is3D: false,
};

export function DoughnutChart({ timeData }) {

  console.log(timeData)
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={timeData}
      options={options}
    />
  );
}
