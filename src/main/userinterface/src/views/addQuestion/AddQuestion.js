import React, { useState } from "react";
import {addQuestion} from "../../services";

function AddQuestion() {
    const [formData, setFormData] = useState({
        subject: "",
        question: "",
        answerKey: "",
        hint: "",
        month: "",
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API
        console.log("Form Data Submitted:", formData);
        // Reset the form
        setFormData({
            subject: "",
            question: "",
            answerKey: "",
            hint: "",
            month: "",
        });

        if (formData != null) {
            try {
                const resData = await addQuestion(formData);
            } catch (error) {
                console.error("Error post data:", error);
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Add Question</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Subject:</label>
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option value="" disabled>
                            Select Subject
                        </option>
                        <option value="PIB24X7">Pib24x7</option>
                        <option value="RBI24X7">Rbi24x7</option>
                        <option value="SPOTLIGHT">Spotlight GA</option>
                        <option value="CA">Cloud Affairs GA</option>
                        <option value="FINANCE">Finance</option>
                        <option value="MANAGEMENT">Management</option>
                        <option value="ESI">Esi</option>
                        {/* Add more subject options */}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Month of question:</label>
                    <select
                        name="month"
                        id="month"
                        value={formData.month}
                        onChange={handleChange}
                        required
                    >
                        {months.map((month) => (
                            <option key={month.value} value={month.value}>
                                {month.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Question:</label>
                    <textarea
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        rows="4"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Answer Key:</label>
                    <input
                        type="text"
                        name="answerKey"
                        value={formData.answerKey}
                        onChange={handleChange}
                        className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Hint:</label>
                    <textarea
                        name="hint"
                        value={formData.hint}
                        onChange={handleChange}
                        className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        rows="2"
                    />
                </div>
                {/* Add more fields for month, etc. */}
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddQuestion;
