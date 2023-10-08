import React, {useState} from 'react';
import {loadQuestions} from '../../services/services';
import {MONTHS} from '../../common/constants';
import {SUBJECTS, QUANT_CHAPTERS, REASONING_CHAPTERS} from '../../common/constants';
import Alert from "../../components/Alert";

function LoadQuestionsFromText() {
    const [questionPath, setQuestionPath] = useState('');
    const [answerPath, setAnswerPath] = useState('');
    const [selectedParser, setSelectedParser] = useState('PIB24X7');
    const [selectedSubject, setSelectedSubject] = useState('PIB24X7');
    const [selectedMonth, setSelectedMonth] = useState('AUG');
    const [selectedQuantChapter, setSelectedQuantChapter] = useState('TIME_AND_WORK'); // State for selected chapter
    const [selectedReasoningChapter, setSelectedReasoningChapter] = useState('SEATING_ARRANGEMENT');
    const [customAlert, setAlert] = useState(false);

    const handleValidateFormat = () => {
        // Validation logic here
    };

    const handleLoadQuestions = async () => {

        var chapter = '';
        if (selectedSubject === "QUANT") {
            chapter = selectedQuantChapter;
        } else {
            chapter = selectedReasoningChapter;
        }

        const dataToSend = {
            questionPath: questionPath,
            answerPath: answerPath,
            selectedParser: selectedParser,
            selectedSubject: selectedSubject,
            selectedMonth: selectedMonth,
            selectedChapter: chapter, // Include selected chapter in the data
        };
        console.log(dataToSend);

        try {
            const resData = await loadQuestions(dataToSend);
            console.log(resData);
            setAlert(true);

            // Reset customAlert to false after rendering the Alert
            setTimeout(() => {
                setAlert(false);
            }, 3000); // Set a timeout to hide the Alert after 3 seconds (adjust as needed)

        } catch (error) {
            alert(error);
            console.error('Error post data:', error);
        }
    };

    // Function to render the chapter dropdown based on the selected subject
    const renderChapterDropdown = () => {
        if (selectedSubject === 'QUANT') {
            return (
                <select
                    className="h-full px-2 py-2 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedQuantChapter}
                    onChange={(e) => setSelectedQuantChapter(e.target.value)}
                    required
                >
                    {QUANT_CHAPTERS.map((chapter) => (
                        <option key={chapter} value={chapter}>
                            {chapter}
                        </option>
                    ))}
                </select>
            );
        } else if (selectedSubject === 'REASONING') {
            return (
                <select
                    className="h-full px-2 py-2 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedReasoningChapter}
                    onChange={(e) => setSelectedReasoningChapter(e.target.value)}
                >
                    {REASONING_CHAPTERS.map((chapter) => (
                        <option key={chapter} value={chapter}>
                            {chapter}
                        </option>
                    ))}
                </select>
            );
        } else {
            return null; // Return nothing if the subject is not QUANT or REASONING
        }
    };

    return (
        <>
            {customAlert && <Alert message={'Questions Loaded successfully'} type={'success'}/>}
            <div className="h-screen flex flex-col justify-center items-center">
                <h1>Load questions</h1>
                <div className="max-w-sm h-max p-6 rounded-lg shadow-xl flex flex-col gap-4">
                    <input
                        className="px-2 py-2 appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                        placeholder="Question Path"
                        value={questionPath}
                        onChange={(e) => setQuestionPath(e.target.value)}
                    />
                    <div className="flex flex-col">
                        <input
                            className="px-2 py-2 appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                            placeholder="Answer Path"
                            value={answerPath}
                            onChange={(e) => setAnswerPath(e.target.value)}
                        />
                        <p className="text-sm text-red-500 self-end">
                            *Answer path required only for spotlight parser
                        </p>
                    </div>
                    <select
                        className="h-full px-2 py-2 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        value={selectedParser}
                        onChange={(e) => setSelectedParser(e.target.value)}
                    >
                        {SUBJECTS.map((subject) => (
                            <option key={subject} value={subject}>
                                {subject + ' Parser'}
                            </option>
                        ))}
                    </select>
                    <select
                        className="h-full px-2 py-2 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                        {SUBJECTS.map((subject) => (
                            <option key={subject} value={subject}>
                                {subject}
                            </option>
                        ))}
                    </select>

                    <select
                        className="h-full px-2 py-2 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                    >
                        {MONTHS.map((month) => (
                            <option key={month.value} value={month.value}>
                                {month.label}
                            </option>
                        ))}
                    </select>

                    {/* Render the chapter dropdown based on selected subject */}
                    {renderChapterDropdown()}

                    <button
                        className="text-xs bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-md"
                        onClick={handleValidateFormat}
                    >
                        Validate Format
                    </button>
                    <button
                        className="text-xs bg-green-500 hover:bg-green-800  text-white font-bold py-2 px-4 rounded-md"
                        onClick={handleLoadQuestions}
                    >
                        Load Questions
                    </button>
                </div>
            </div>
        </>
    );
}

export default LoadQuestionsFromText;
