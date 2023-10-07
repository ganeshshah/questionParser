import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchQretestResult } from "../../../../services/services";
import PieChart from "../../../endTest/components/PieChart";
import Loading from "../../../../components/Loading";

function EndQreTest() {
    const location = useLocation();
    const totalTime = location.state.timer / 60;
    const totalTimeTaken = totalTime.toFixed(2);
    const testId = location.state.testId;
    const subject = location.state.subject;
    const [isLoading, setIsLoading] = useState(true);
    const [testResultData, setTestResultData] = useState({});
    const [data, setData] = useState([]); // Initialize data as an empty array
    const [attemptedData, setAttemptedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const testRequestData = {
                    testId: testId,
                    totalTime: totalTime,
                    subject: subject,
                    questionTimers: location.state.questionTimers,
                    questions: location.state.questions,
                };
                const resData = await fetchQretestResult(testRequestData);
                console.log(resData.data);
                setTestResultData(resData.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                // Set isLoading to false once data is fetched

            }
        };

        fetchData();
    }, [testId, totalTime, subject, location.state.questionTimers, location.state.questions]);

    useEffect(() => {
        // Prepare the data after testResultData is updated
        if (testResultData && testResultData.correctQuestionIds) {
            const newData = [
                ["Result", "Percentage"],
                ["Correct", testResultData.correctQuestionIds.length || 0],
                ["Mistake", testResultData.incorrectQuestionIds.length || 0]
            ];
            const newData1 = [
                ["Question Share", "Percentage"],
                ["Attempted", testResultData.totalQuestionAttempted],
                ["NotAttemptedOrUntouched", testResultData.totalQuestionsUnAttemptedAndUnreviewed],
            ];
         console.log(newData)
            // Update the data state with the newly prepared data
            setData(newData);
         setAttemptedData(newData1)
            setIsLoading(false);
        }
    }, [testResultData]);

    const navigate = useNavigate();
    const navigateToReviewQuestions = () => {
        navigate('/review_questions', { state: { qlist: testResultData.incorrectQuestionsList } });
    };

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="container">
                    <h1>Exam Results</h1>
                    <div>
                        <p>Total time Spent in exam: {totalTimeTaken} mins</p>
                        <p>TestId: {testId}</p>
                        <p>Subject: {subject}</p>
                    </div>
                    <PieChart data={data} />
                    <PieChart data={attemptedData} />

                    <h2>Review Incorrect Questions Again</h2>
                    <br />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={navigateToReviewQuestions}
                    >
                        Review Questions
                    </button>
                </div>
            )}
        </>
    );
}

export default EndQreTest;
