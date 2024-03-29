import React, { useState, useEffect } from 'react';
import { fetchRevisionData } from '../../../services/services';
import { useNavigate } from 'react-router-dom';
import { MONTHS } from '../../../common/constants'
import { SUBJECTS } from '../../../common/constants'

function RevisionSearchBar() {
    const [selectedMonth, setSelectedMonth] = useState('ALL');
    const [selectedSubject, setSelectedSubject] = useState('ALL');

    const navigate = useNavigate();

    const handleSearch = async () => {
        const data = await fetchRevisionData(selectedMonth, selectedSubject);

        if (selectedSubject !== 'ALL') {
            if (selectedSubject.toUpperCase() == 'PIB24X7') {
                navigate('/revise_dashboard', { state: { data: data.PIB24X7 } })
            }
            else if (selectedSubject.toUpperCase() == 'RBI24X7') {
                navigate('/revise_dashboard', { state: { data: data.RBI24X7 } })
            }
            else if (selectedSubject.toUpperCase() == 'SPOTLIGHT') {
                navigate('/revise_dashboard', { state: { data: data.SPOTLIGHT } })
            }
            else if (selectedSubject.toUpperCase() == 'CA') {
                navigate('/revise_dashboard', { state: { data: data.CA } })
            } else {
                console.log("Page not defined yet");
            }
        }
    };

    return (
        <div className="border border-green-200 rounded-lg p-2 w-full flex items-center gap-2">
            <div className="relative flex-grow">
                <select
                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    <option value="ALL">Select Month</option>
                    {MONTHS.map((month) => (
                        <option value={month.value}>{month.label}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 11.293a1 1 0 011.414 0L13 13.586V6a1 1 0 112 0v7.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414 1 1 0 011.414 0z" /></svg>
                </div>
            </div>

            <div className="relative flex-grow">
                <select
                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                >
                    <option value="ALL">All Subjects</option>
                    {SUBJECTS.map((subject) => (
                        <option value={subject}>{subject}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 11.293a1 1 0 011.414 0L13 13.586V6a1 1 0 112 0v7.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414 1 1 0 011.414 0z" /></svg>
                </div>
            </div>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default RevisionSearchBar;
