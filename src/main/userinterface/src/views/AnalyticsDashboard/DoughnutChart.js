import React from "react";
import { Chart } from "react-google-charts";



export const options = {
  title: "Subject Wise Completion Percentage",
  pieHole: 0.4,
  is3D: false,
};

export function DoughnutChart({analyticsData}) {

  console.log(analyticsData.doughnutChartData)

  const data = JSON.stringify(analyticsData.doughnutChartData);
  console.log(JSON.stringify(data))
  console.log(Object.values(data))
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
