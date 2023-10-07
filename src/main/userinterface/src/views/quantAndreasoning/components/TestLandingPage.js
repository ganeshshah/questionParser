import React, { useState, useEffect } from 'react';

function TestLandingPage({ questions }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [inputAnswer, setInputAnswer] = useState('');
    const [results, setResults] = useState([]);
    const [showSolution, setShowSolution] = useState(false);
    const [solutionButtonEnabled, setSolutionButtonEnabled] = useState(false);

    // State for tracking time spent on each question
    const [questionTimers, setQuestionTimers] = useState({});

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

    const handleSubmit = () => {
        const currentQuestionObj = questions[currentQuestion];
        const isCorrect = inputAnswer.toLowerCase() === currentQuestionObj.answerKey.toLowerCase();
        setResults([...results, isCorrect]);
        if (isCorrect) {
            alert('Correct!');
            // Enable the "Solution" button after submitting
        } else {
            alert('Incorrect!');
            setSolutionButtonEnabled(true);
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

    return (
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
                            {/* Add solution content */}
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
    );
}

export default TestLandingPage;
