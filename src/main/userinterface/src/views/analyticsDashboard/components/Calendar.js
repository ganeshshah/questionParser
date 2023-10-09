import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const options = {
    title: "Daily Consistency",
    colorAxis: {
        minValue: 0, // Set the minimum value of the color axis to 0
    },
};

export function Calendar({ analyticsData }) {
    // Initialize resultList as a state variable
    const [resultList, setResultList] = useState([]);

    useEffect(() => {
        // This effect will run whenever analyticsData changes
        const updatedResultList = [];

        for (const key in analyticsData) {
            if (analyticsData.hasOwnProperty(key)) {
                var date = new Date(key);
                const number = analyticsData[key];

                // Handle null values
                if (number !== null) {
                    updatedResultList.push([date, number]);
                }
            }
        }

        // Set the updated resultList in state
        setResultList(updatedResultList);
    }, [analyticsData]); // Only run this effect when analyticsData changes

    const resultArray = [
        [
            { type: "date", id: "Date" },
            { type: "number", id: "Attempts" },
        ],
        ...resultList,
    ];

    console.log(resultArray);
    console.log(analyticsData);

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
