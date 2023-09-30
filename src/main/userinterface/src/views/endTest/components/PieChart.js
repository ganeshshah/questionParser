import React from "react";
import { Chart } from "react-google-charts";


export const options = {
  title: "Test Results",
  colors: ['#34eba2','#eb7734']
};

export default function PieChart({data}) {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
