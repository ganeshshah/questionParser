import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Criteria wise question distribution overall subjects",
  chartArea: { width: "50%" },
  colors: ["#b0120a", "#49bf28"],
  hAxis: {
    title: "Total Questions",
    minValue: 0,
  },
  vAxis: {
    title: "Completion Target",
  },
};

export function DoubleBarChart({analyticsData}) {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={analyticsData}
      options={options}
    />
  );
}
