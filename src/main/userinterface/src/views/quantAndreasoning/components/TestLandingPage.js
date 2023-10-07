import React, { useState, useEffect } from 'react';
import {submitQuestion} from "../../../services/services";
import {useNavigate} from "react-router-dom";

function TestLandingPage({ questions, testIdObject }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [inputAnswer, setInputAnswer] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [solutionButtonEnabled, setSolutionButtonEnabled] = useState(false);
    const navigate = useNavigate();
    const [timer, setTimer] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [questionTimers, setQuestionTimers] = useState({});
    const testId = testIdObject.testId;
    const subject = testIdObject.subject;

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    useEffect(() => {
        let interval;

        if (isTimerRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isTimerRunning]);

    // State for tracking time spent on each question


    useEffect(() => {
        // Start the timer for the current question when the component mounts or when the current question changes
        const timerInterval = setInterval(() => {
            setQuestionTimers((prevTimers) => {
                const currentQuestionId = questions[currentQuestion]?.id;
                const newTimers = { ...prevTimers };
                if (currentQuestionId in newTimers) {
                    newTimers[currentQuestionId] += 1;
                } else {
                    newTimers[currentQuestionId] = 1;
                }
                return newTimers;
            });
        }, 1000);

        return () => {
            // Clear the timer interval when the component unmounts or when the current question changes
            clearInterval(timerInterval);
        };
    }, [currentQuestion, questions]);

    const dataToSend = {
        testId: testIdObject ? testIdObject.testId : 0,
        questionId: '',
        result: 0,
        testDate: testIdObject ? testIdObject.date : null,
        subject: '',
        month : ''
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const currentQuestionObj = questions[currentQuestion];
        const isCorrect = inputAnswer.toLowerCase() === currentQuestionObj.answerKey.toLowerCase();
        if (isCorrect) {
            alert('Correct!');
            dataToSend.result = 1;
            // Enable the "Solution" button after submitting
        } else {
            alert('Incorrect!');
            setSolutionButtonEnabled(true);
        }
        dataToSend.questionId = currentQuestionObj.id;
        dataToSend.subject = currentQuestionObj.subject;
        dataToSend.month = currentQuestionObj.month;

        if (testIdObject != null) {
            try {
                const resData = await submitQuestion(dataToSend);
            } catch (error) {
                console.error("Error post data:", error);
            }
        }
    };

    const handleNextQuestion = () => {
        setSolutionButtonEnabled(false);
        clearInterval(questionTimers[questions[currentQuestion]?.id]);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setInputAnswer('');
            setShowSolution(false);
        } else {
            alert('Quiz finished!');
        }
        console.log(questionTimers)
    };

    const handlePreviousQuestion = () => {
        setSolutionButtonEnabled(false);
        clearInterval(questionTimers[questions[currentQuestion]?.id]);
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setInputAnswer('');
            setShowSolution(false);
        }
        console.log(questionTimers)
    };

    const handleQuestionClick = (index) => {
        clearInterval(questionTimers[questions[currentQuestion]?.id]);
        setCurrentQuestion(index);
        setShowSolution(false);
    };

    const handleSolutionClick = () => {
        setShowSolution(true);
    };
    const onEndClickHandler = () => {
        setIsTimerRunning(false);
        navigate('/end_qre_test', { state: { timer, testId : testIdObject.testId, subject, questionTimers, questions } });
    };


    return (
        <>
            {/* Code for to header*/}
        <div className="flex justify-between items-center p-2">
            <button className='bg-green-500 px-4 mt-2 py-2  text-white rounded-md cursor-pointer whitespace-nowrap' >
                Test Has Started
            </button>
            <p>Test Id: {testId}</p>
            <div className="font-bold text-slate-600 text-lg">
                {formatTime(timer)}
            </div>
            <button onClick={onEndClickHandler} className='bg-red-500 px-4 mt-2 py-2  text-white rounded-md cursor-pointer whitespace-nowrap' >
                End test
            </button>
        </div>
            {/* Code for question rendering logic*/}
        <div className="min-h-screen flex">
            <div className="w-1/8 p-4">
                <h2 className="text-xl font-semibold">Questions</h2>
                <ul>
                    {questions.map((question, index) => (
                        <li
                            key={question.id}
                            onClick={() => handleQuestionClick(index)}
                            className={`cursor-pointer py-2 ${
                                currentQuestion === index ? 'bg-gray-200' : ''
                            }`}
                        >
                            {index + 1}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-3/4 p-4">
                <div className="bg-white p-8 rounded shadow-lg">
                    {showSolution ? (
                        <div>
                            <p>Solution for Question {currentQuestion + 1}</p>
                            {questions[currentQuestion].hint}
                        </div>
                    ) : (
                        <div>
                            <div>
                                <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
                                    {questions[currentQuestion].question}
                                </pre>
                            </div>
                            <br />
                            <input
                                type="text"
                                value={inputAnswer}
                                onChange={(e) => setInputAnswer(e.target.value)}
                                placeholder="Your answer"
                                className="border border-gray-400 p-2 rounded mb-4"
                            />
                            <button
                                onClick={handleSubmit}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                            >
                                Submit
                            </button>
                            <button
                                onClick={handleNextQuestion}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Next
                            </button>
                            {currentQuestion > 0 && (
                                <button
                                    onClick={handlePreviousQuestion}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
                                >
                                    Back
                                </button>
                            )}
                            {solutionButtonEnabled && (
                                <button
                                    onClick={handleSolutionClick}
                                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                                >
                                    Solution
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}

export default TestLandingPage;
