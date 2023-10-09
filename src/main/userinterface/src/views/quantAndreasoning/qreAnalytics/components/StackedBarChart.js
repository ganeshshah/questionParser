import React from "react";
import { Chart } from "react-google-charts";

export function StackedBarChart({ data}) {

  const options = {
    chartArea: { width: "50%" },
    isStacked: true,
    colors: ["#b0120a", "#49bf28"],
    hAxis: {
      title: "Solving time in Minutes",
      minValue: 0,
    },
    vAxis: {
      title: "Chapters",
    },
    title: "Chapter wise question distribution for analyzing calculation time",
  };

  const resultArray = [
    ["Chapters", "Maximum average time required to solve", "Overall Average time required to solve"],
    ...Object.keys(data).map((key) => [key, ...data[key]]),
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
