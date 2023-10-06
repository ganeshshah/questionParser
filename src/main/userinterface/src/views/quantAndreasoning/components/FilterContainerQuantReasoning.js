import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MONTHS, ACCURACY, QUANT_CHAPTERS, REASONING_CHAPTERS } from '../../../common/constants';

function FilterContainerQuantReasoning() {
    const [numQuestions, setNumQuestions] = useState('0');
    const [flag, setFlag] = useState('no');
    const [subject, setSubject] = useState('');
    const [accuracy, setAccuracy] = useState('0');
    const [month, setMonth] = useState('AUG');
    const [chapter, setChapter] = useState('');
    const [time, setTime] = useState('NA');
    const [timeValue, setTimeValue] = useState('');

    const handleTimeOnChange = (e) => {
        const selectedTime = e.target.value;
        setTime(selectedTime);
        // Clear the input field when the time option changes
        setTimeValue('');
    };

    const navigate = useNavigate();

    const navigateToSearch = (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (!subject || !chapter) {
            alert('Please select both Subject and Chapter.');
            return;
        }
        navigate('/search_qre_questions_with_params', {
            state: { numQuestions, flag, subject, chapter, accuracy, month, time, timeValue },
        });
    };

    const navigate2 = useNavigate();
    const navigateToCreatetest = (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (!subject || !chapter) {
            alert('Please select both Subject and Chapter.');
            return;
        }
        navigate2('/create_qre_test', {
            state: { numQuestions, flag, subject, chapter, accuracy, month, time, timeValue },
        });
    };

    const getChapterOptions = () => {
        if (subject === 'QUANT') {
            return QUANT_CHAPTERS;
        } else if (subject === 'REASONING') {
            return REASONING_CHAPTERS;
        } else {
            return [];
        }
    };

    return (
        <form onSubmit={navigateToSearch}>
            <div className="border border-green-200 rounded-lg p-2 w-full flex flex-col gap-2">
                <div className="flex lg:flex-row flex-col mb-1 sm:mb-0 gap-2">
                    <input
                        className="w-full px-2 py-1 appearance-none rounded border border-gray-400 border-b block bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                        type="number"
                        id="numQuestions"
                        value={numQuestions}
                        onChange={(e) => setNumQuestions(e.target.value)}
                        placeholder="Typeable"
                    />
                    <select
                        className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        value={flag}
                        onChange={(e) => setFlag(e.target.value)}
                    >
                        <option value="yes">All</option>
                        <option value="no">Not all</option>
                        <option value="0">Not Attempted Yet</option>
                        <option value="1">Attempted Once</option>
                        <option value="2">Attempted twice</option>
                        <option value="3">Attempted thrice</option>
                        <option value="4">Attempted fourth time</option>
                    </select>

                    <select
                        className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    >
                        <option value="">Select Subject</option>
                        <option value="QUANT">QUANT</option>
                        <option value="REASONING">REASONING</option>
                    </select>
                    <select
                        className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        id="chapter"
                        value={chapter}
                        onChange={(e) => setChapter(e.target.value)}
                        required
                    >
                        <option value="">Select Chapter</option>
                        {getChapterOptions().map((a) => (
                            <option key={a} value={a}>
                                {a}
                            </option>
                        ))}
                    </select>
                    <select
                        className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        id="accuracy"
                        value={accuracy}
                        onChange={(e) => setAccuracy(e.target.value)}
                    >
                        <option value="0">Select Accuracy</option>
                        {ACCURACY.map((a) => (
                            <option key={a} value={a}>
                                Less than {a}%
                            </option>
                        ))}
                    </select>

                    <select
                        className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        id="month"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                    >
                        {MONTHS.map((month) => (
                            <option key={month.value} value={month.value}>
                                {month.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <select
                        className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        value={time}
                        onChange={handleTimeOnChange}
                    >
                        <option value="NA">Select Timing Criteria</option>
                        <option value="minTime">MIN_TIME</option>
                        <option value="maxTime">MAX_TIME</option>
                        <option value="averageTime">AVG_TIME</option>
                    </select>

                    {(time === 'minTime' || time === 'maxTime' || time === 'averageTime') && (
                        <input
                            type="number"
                            className="h-full px-2 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter a number"
                            value={timeValue}
                            onChange={(e) => setTimeValue(e.target.value)}
                        />
                    )}
                </div>
                <div className="flex lg:flex-row flex-col justify-end gap-2">
                    <button
                        className="text-xs bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md whitespace-nowrap"
                        type="submit"
                    >
                        Fetch Question
                    </button>

                    <button
                        className="text-xs bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded-md whitespace-nowrap"
                        onClick={navigateToCreatetest}
                        type="submit"
                    >
                        Create Test
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FilterContainerQuantReasoning;

