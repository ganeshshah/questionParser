import React from "react";
import { Chart } from "react-google-charts";

export function StackedBarChart({ analyticsData, subject }) {

  const options = {
    chartArea: { width: "50%" },
    isStacked: true,
    colors: ["#b0120a", "#49bf28"],
    hAxis: {
      title: "Total Questions",
      minValue: 0,
    },
    vAxis: {
      title: "Completion Target",
    },
    title: "Criteria wise question distribution for " + subject, // Moved inside the component
  };

  const resultArray = [
    ["Criteria", "target", "completed"],
    ...Object.keys(analyticsData).map((key) => [key, ...analyticsData[key]]),
  ];

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={resultArray}
      options={options}
    />
  );
}
