import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Day",
    "Guardians of the Galaxy",
    "The Avengers",
    "Transformers: Age of Extinction",
  ],
  [1, 37.8, 100.8, 41.8],
  [2, 30.9, 69.5, 32.4],
  [3, 25.4, 57, 25.7],
  [4, 11.7, 18.8, 10.5],
  [5, 11.9, 17.6, 10.4],
  [6, 8.8, 13.6, 7.7],
  [7, 7.6, 12.3, 9.6],
  [8, 12.3, 29.2, 10.6],
  [9, 16.9, 42.9, 14.8],
  [10, 12.8, 30.9, 11.6],
  [11, 5.3, 7.9, 0],
  [12, 6.6, 8.4, 0],
  [13, 4.8, 6.3, 0],
  [14, 4.2, 6.2, 3.4],
  [15, 16.9, 42.9, 14.8],
  [16, 12.8, 30.9, 11.6],
  [17, 5.3, 7.9, 4.7],
  [18, 6.6, 8.4, 5.2],
  [19, 4.8, 6.3, 3.6],
  [20, 4.2, 6.2, 3.4],
];

export const options = {
  chart: {
    title: "Monthly Questions Attempted",
    subtitle: "By day",
  },
};

export function LineChart({ analyticsData }) {


  const resultArray = [
    ["Months", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    ...Object.keys(analyticsData).map((key) => [key, ...analyticsData[key]]),
  ];

  return (
    <Chart
      className="z-0"
      chartType="Line"
      width="100%"
      height="400px"
      data={resultArray}
      options={options}
    />
  );
}
