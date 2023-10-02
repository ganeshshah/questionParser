import React from "react";
import { Chart } from "react-google-charts";

export const options = {
    title: "Daily Consistency",
    colorAxis: {
        minValue: 0, // Set the minimum value of the color axis to 0
    },
};

export function Calendar({analyticsData}) {

    const resultList = [];

    for (const key in analyticsData) {
        if (analyticsData.hasOwnProperty(key)) {
            var date = new Date(key);
            const number = analyticsData[key] % 10; // Get the last digit of the number
            resultList.push([date, number]);
        }
    }
    
    const resultArray = [
        [
            { type: "date", id: "Date" },
            { type: "number", id: "Attempts" },
        ],
        ...resultList,
    ];

    return (
        <Chart
            chartType="Calendar"
            width="100%"
            height="200px"
            data={resultArray}
            options={options}
        />
    );
}
