import React, { useState, useEffect } from 'react';
import { DoubleBarChart } from './components/DoubleBarChart';
import { LineChart } from './components/LineChart';
import { StackedBarChart } from './components/StackedBarChart';
import { DoughnutChart } from './components/DoughnutChart';
import MaterialCardQuestion from './components/MaterialCardQuestion';
import MaterialCardAttempted from './components/MaterialCardAttempted';
import { fetchAnalyticsData } from '../../services';
import Loading from '../../components/Loading';

function ShowAnalytics() {
    const [param, setParam] = useState('AUG,SEPT&allMonthsIndicator=YES');
    const [analyticsData, setAnalyticsData] = useState(null);
    const [loading, setLoading] = useState(false);
    const subjects = ['RBI24X7', 'SPOTLIGHT', 'PIB24X7', 'CA'];
    const [selectedMonths, setSelectedMonths] = useState([]);

    const months = [
        { value: 'JAN', label: 'January' },
        { value: 'FEB', label: 'February' },
        { value: 'MAR', label: 'March' },
        { value: 'APR', label: 'April' },
        { value: 'MAY', label: 'May' },
        { value: 'JUNE', label: 'June' },
        { value: 'JULY', label: 'July' },
        { value: 'AUG', label: 'August' },
        { value: 'SEPT', label: 'September' },
        { value: 'OCT', label: 'October' },
        { value: 'NOV', label: 'November' },
        { value: 'DEC', label: 'December' },
    ];

    const handleMonthChange = (event) => {
        const monthValue = event.target.value;
        if (selectedMonths.includes(monthValue)) {
            setSelectedMonths(selectedMonths.filter((value) => value !== monthValue));
        } else {
            setSelectedMonths([...selectedMonths, monthValue]);
        }
    };

    const handleFetchData = async () => {
        setLoading(true);
        try {
            // Construct the selected months string
            const selectedMonthsStr = selectedMonths.join(',');
            const updatedParam = `${selectedMonthsStr}&allMonthsIndicator=NO`;
            setParam(updatedParam);
            const analyticsDatas = await fetchAnalyticsData(updatedParam);
            setAnalyticsData(analyticsDatas);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const analyticsDatas = await fetchAnalyticsData(param);
                setAnalyticsData(analyticsDatas);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (param && param.trim() !== '') {
            fetchData();
        }
    }, [param]);

    return (
        <>
            {loading && <Loading />}
            {analyticsData && (
                <div className="ShowAnalytics">
                    <h1>Analytics Dashboard</h1>
                    <div className="multipleMonths">
                        <p>By default, Analytics are shown for all months. Select specific month(s) if you want:</p>
                        <div className="w-1/4 p-4 border border-gray-300 rounded-md shadow-md bg-white">
                            <h2 className="text-xl font-semibold mb-4">Select Month(s)</h2>
                            <div className="flex flex-wrap justify-start">
                                {months.map((month) => (
                                    <label key={month.value} className="flex items-center mr-4 mb-2">
                                        <input
                                            type="checkbox"
                                            name="month"
                                            value={month.value}
                                            checked={selectedMonths.includes(month.value)}
                                            onChange={handleMonthChange}
                                            className="mr-2"
                                        />
                                        {month.label}
                                    </label>
                                ))}
                            </div>
                            <button
                                onClick={handleFetchData}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                            >
                                Fetch Data
                            </button>
                        </div>
                    </div>
                    <div>
                        <MaterialCardQuestion totalQuestions={analyticsData.totalQuestions} />
                        <MaterialCardAttempted totalAttempted={analyticsData.totalAttempted} />
                    </div>
                    <LineChart analyticsData={analyticsData.lineChartData} />
                    <DoubleBarChart analyticsData={analyticsData.doubleBarChartData} />
                    <DoughnutChart analyticsData={analyticsData.doughnutChartData} />
                    <h1 style={{ textAlign: 'center' }}>Subject Wise Statistics</h1>
                    {subjects.map((subject) => {
                        return (
                            <StackedBarChart
                                key={subject}
                                analyticsData={analyticsData.subjectWiseBarChartData[subject]}
                                subject={subject}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default ShowAnalytics;
