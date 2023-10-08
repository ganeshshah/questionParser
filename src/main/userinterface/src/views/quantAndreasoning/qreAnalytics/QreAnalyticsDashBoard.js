import React, { useState, useEffect } from 'react';
import {fetchQreAnalyticsData} from "../../../services/services";
import Loading from "../../../components/Loading";
import AnalyticsCard from "../../../components/AnalyticsCard";
import PieChart from "./components/PieChart";
import {DoubleBarChart} from "./components/DoubleBarChart";
import {StackedBarChart} from "./components/StackedBarChart";


function QreAnalyticsDashBoard() {
    const [analyticsData, setAnalyticsData] = useState(null);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const analyticsDatas = await fetchQreAnalyticsData();
                setAnalyticsData(analyticsDatas);
                console.log(analyticsDatas);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
            fetchData();

    }, []);


    return (
        <>
            {loading && <Loading />}
            {analyticsData && (
                <div className="flex flex-col">
                    <p className='text-2xl text-bold self-center'>Analytics Dashboard for Quant and Reasoning</p>

                    <div className='flex flex-row max-lg:flex-col justify-between my-4'>
                        <AnalyticsCard title={'Total Quant Questions Overall'} subTitle={'Present'} totalNumber={analyticsData.totalQuantQuestions} />
                        <AnalyticsCard title={'Total Quant Questions Attempted'} subTitle={' At least Once'} totalNumber={analyticsData.totalQuantQuestionsSolved} />
                        <AnalyticsCard title={'Total Reasoning Questions Overall'} subTitle={'Present'} totalNumber={analyticsData.totalReasoningQuestions} />
                        <AnalyticsCard title={'Total Reasoning Questions Attempted'} subTitle={' At least Once'} totalNumber={analyticsData.totalReasoningQuestionsSolved} />
                    </div>
                    <p className='text-2xl text-bold self-center'> Quant Question Analysis</p>
                     <PieChart data = {analyticsData.quantPieChartTotalSolved}/>
                     <DoubleBarChart data = {analyticsData.quantTotalQuestionVsSolved}/>
                     <StackedBarChart data = {analyticsData.quantChapterWiseMaxAvgTime} />
                    <p className='text-2xl text-bold self-center'> Reasoning Question Analysis</p>
                     <PieChart data = {analyticsData.reasoningPieChartTotalSolved}/>
                     <DoubleBarChart data = {analyticsData.reasoningTotalQuestionVsSolved}/>
                     <StackedBarChart data = {analyticsData.reasoningChapterWiseMaxAvgTime} />
                </div>
            )}
        </>
    );
}

export default QreAnalyticsDashBoard;
