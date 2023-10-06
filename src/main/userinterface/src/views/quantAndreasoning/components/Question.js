import React, { useState } from 'react';

const Question = ({ question, onSubmit }) => {
    const [answer, setAnswer] = useState('');

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = () => {
        // Handle the submission logic (e.g., check if the answer is correct)
        // If the answer is correct, you can proceed to the next question
        onSubmit();
        setAnswer('');
    };

    return (
        <div>
            <h2 className="text-xl font-bold">Question {question.id}</h2>
            <p className="text-lg">{question.text}</p>
            <input
                type="text"
                placeholder="Your Answer"
                value={answer}
                onChange={handleAnswerChange}
                className="border rounded-md p-2 mt-2"
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
                Submit
            </button>
        </div>
    );
};

export default Question;
