import React, { useState, useEffect } from 'react';
import { DoubleBarChart } from './components/DoubleBarChart';
import { LineChart } from './components/LineChart';
import { StackedBarChart } from './components/StackedBarChart';
import { DoughnutChart } from './components/DoughnutChart';
import MaterialCardQuestion from './components/MaterialCardQuestion';
import MaterialCardAttempted from './components/MaterialCardAttempted';
import { fetchAnalyticsData } from '../../services';
import Loading from '../../components/Loading'

function ShowAnalytics() {
    const [param, setParam] = useState('AUG,SEPT&allMonthsIndicator=NO');
    const [analyticsData, setAnalyticsData] = useState(null);
    const [loading, setLoading] = useState([false]);
    const subjects = ["RBI24X7", "SPOTLIGHT", "PIB24X7", "CA"];

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const analyticsDatas = await fetchAnalyticsData(param);
                setAnalyticsData(analyticsDatas);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false)
            }
        };

        if (param && param.trim() !== '') {
            fetchData();
        }
    }, [param]);

    return (
        <>
            {loading &&
                <Loading />}
            {analyticsData && <div className="ShowAnalytics">
                <h1>Analytics Dashboard</h1>
                <div>
                    <MaterialCardQuestion totalQuestions = {analyticsData.totalQuestions}/>
                    <MaterialCardAttempted totalAttempted = {analyticsData.totalAttempted}/>
                </div>
                <LineChart />
                <DoubleBarChart analyticsData={analyticsData.doubleBarChartData}/>
                <DoughnutChart analyticsData={analyticsData.doughnutChartData} />
                <h1 style={{textAlign : "center"}}>Subject Wise Statistics</h1>
                {subjects.map(subject => {
                    return (
                        <StackedBarChart
                            key={subject}
                            analyticsData={analyticsData.subjectWiseBarChartData[subject]}
                            subject={subject}
                        />
                    );
                })}

            </div>}
        </>
    );
}

export default ShowAnalytics;
