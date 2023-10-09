import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Chapter wise questions statistics",
  chartArea: { width: "50%" },
  colors: ["#b0120a", "#49bf28"],
  hAxis: {
    title: "Total Questions",
    minValue: 0,
  },
  vAxis: {
    title: "Chapters",
  },
};

export function DoubleBarChart({data}) {

  const resultArray = [
    ["Chapters", "Total Question Present", "Total Solved"],
    ...Object.entries(data).map(([key, value]) => [key, ...value])
  ];
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="800px"
      data={resultArray}
      options={options}
    />
  );
}
