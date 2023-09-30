import React, { useState, useEffect } from 'react';
import './css/ShowAnalytics.css';
import { DoubleBarChart } from './components/DoubleBarChart';
import { LineChart } from './components/LineChart';
import { StackedBarChart } from './components/StackedBarChart';
import { DoughnutChart } from './components/DoughnutChart';
import MaterialCardQuestion from './components/MaterialCardQuestion';
import MaterialCardAttempted from './components/MaterialCardAttempted';
import { fetchAnalyticsData } from '../../services';

function ShowAnalytics() {
    const [param, setParam] = useState('AUG,SEPT&allMonthsIndicator=NO');
    const [analyticsData, setAnalyticsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const analyticsDatas = await fetchAnalyticsData(param);
                setAnalyticsData(analyticsDatas);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (param && param.trim() !== '') {
            fetchData();
        }
    }, [param]);

    console.log('Analytics data is ready:', analyticsData);

    // useEffect(() => {
    //     if (analyticsData !== null) {
    //         // Perform actions or render components based on the updated analyticsData here
    //         console.log('Analytics data is ready:', analyticsData);
    //     }
    // }, [analyticsData]);

    if (analyticsData === null) {
        return null; // Return early if data is not available
    }

    return (
        <>
        { analyticsData && <div className="ShowAnalytics">
            <h1>Analytics Dashboard</h1>
            <div>
                <MaterialCardQuestion />
                <MaterialCardAttempted />
            </div>
            <LineChart />
            <DoubleBarChart />
            <DoughnutChart analyticsData = {analyticsData.doughnutChartData}/>
            <StackedBarChart />
        </div> }
        </>
    );
}

export default ShowAnalytics;
