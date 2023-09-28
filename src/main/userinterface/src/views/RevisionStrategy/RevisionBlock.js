import React from 'react';
import { Chart } from 'react-google-charts';

const data = {
    RBI24X7: {
        '15Days': [1, 2, 3],
        'notAttempted': [7, 9],
        'lessThan80Accuracy': [12, 15],
        '25Days': [30, 21, 23],
        '7Days': [89],
    },
};


function RevisionBlock() {
    // Calculate the number of data points for each key
    const dataCounts = Object.keys(data.RBI24X7).reduce((counts, key) => {
        counts[key] = data.RBI24X7[key].length;
        return counts;
    }, {});

    const predefinedColors = ['#337825', '#5f7825', '#d12e31', '#79a80c', '#eb5334'];

    const barChartData = [['Key', 'Number of Data', { role: 'style' }]];

    Object.keys(dataCounts).forEach((key, index) => {
        const roundedValue = Math.round(dataCounts[key]);
        const color = predefinedColors[index % predefinedColors.length]; // Function to generate a random color
        barChartData.push([key, roundedValue, color]);
    });

    // Prepare data for the doughnut chart
    const doughnutChartData = [['Key', 'Number of Data']];
    Object.keys(dataCounts).forEach((key) => {
        doughnutChartData.push([key, dataCounts[key]]);
    });

    return (
        <div className="RevisionBlock">
            <div className="chart-container">
                <Chart
                    chartType="BarChart"
                    width="100%"
                    height="300px"
                    data={barChartData}
                    options={{
                        title: 'Number of questions to revise by each category',
                        legend: { position: 'none' },
                    }}
                />
            </div>

            <div className="chart-container">
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="300px"
                    data={doughnutChartData}
                    options={{
                        title: 'DashBoard for questions for revision',
                        pieHole: 0.4, // This creates a hole in the center of the doughnut chart
                        legend: { position: 'right' },
                    }}
                />
            </div>
        </div>
    );
}

export default RevisionBlock;
