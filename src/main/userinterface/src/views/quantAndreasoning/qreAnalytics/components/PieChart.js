import React from "react";
import { Chart } from "react-google-charts";


export const options = {
  title: "ChapterWise question solved",
};

export default function PieChart({data}) {

  const resultArray = [
    ["Chapters", "Solved"],
    ...Object.entries(data).map(([key, value]) => [key, value])
  ];
  return (
    <Chart
      chartType="PieChart"
      data={resultArray}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
