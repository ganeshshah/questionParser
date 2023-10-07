import React, { useState } from 'react';

function TestLandingPage({ questions }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [inputAnswer, setInputAnswer] = useState('');
    const [results, setResults] = useState([]);
    const [showSolution, setShowSolution] = useState(false);
    const [solutionButtonEnabled, setSolutionButtonEnabled] = useState(false);

    const handleSubmit = () => {
        const currentQuestionObj = questions[currentQuestion];
        const isCorrect =
            inputAnswer.toLowerCase() === currentQuestionObj.answerKey.toLowerCase();
        setResults([...results, isCorrect]);
        if (isCorrect) {
            alert('Correct!');
            // Enable the "Solution" button after submitting
        } else {
            alert('Incorrect!');
            setSolutionButtonEnabled(true)
        }
    };

    const handleNextQuestion = () => {
        setSolutionButtonEnabled(false)
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setInputAnswer('');
            // Disable the "Solution" button when moving to the next question
            setShowSolution(false);
        } else {
            alert('Quiz finished!');
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setInputAnswer('');
            // Disable the "Solution" button when moving to the previous question
            setShowSolution(false);
        }
    };

    const handleQuestionClick = (index) => {
        setCurrentQuestion(index);
        // Disable the "Solution" button when selecting a question from the list
        setShowSolution(false);
    };

    const handleSolutionClick = () => {
        // Show the solution popup
        setShowSolution(true);
    };

    return (
        <div className="min-h-screen flex">
            <div className="w-1/8 p-4">
                <h2 className="text-xl font-semibold">Questions</h2>
                <ul>
                    {questions.map((question, index) => (
                        <li
                            key={index}
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
                        // Show the solution here
                        // Add your solution content
                        <div>
                            <p>Solution for Question {currentQuestion + 1}</p>
                            {/* Add solution content */}
                        </div>
                    ) : (
                        // Show the question and answer input
                        <div>
                            <h2 className="text-lg font-semibold mb-4">
                                {questions[currentQuestion].question}
                            </h2>
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
