import React from 'react';
import { Chart } from 'react-google-charts';
import { useLocation } from 'react-router-dom';
import RevisionQuestionBar from './RevisionQuestionBar';

function RevisionBlock() {
    const location = useLocation();
    const {data} = location.state; // Replace PIB24X7 with the subject you want to display
    console.log(data);
    // Calculate the number of data points for each key
    const dataCounts = Object.keys(data).reduce((counts, key) => {
        counts[key] = data[key].length;
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
                <RevisionQuestionBar data = {data}/>
            </div>
        </div>
    );
}

export default RevisionBlock;
