import React, { useState } from "react";
import { addQuestion } from "../../services/services";
import Alert from '../../components/Alert'
import { MONTHS, SUBJECTS, QUANT_CHAPTERS, REASONING_CHAPTERS } from '../../common/constants'

function AddQuestion() {
    const [formData, setFormData] = useState({
        subject: "",
        chapter: "NA",
        question: "",
        answerKey: "",
        hint: "",
        month: "",
    });
    const [alert, setAlert] = useState(false); // Initialize alert state as false

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData != null) {
            try {
                const resData = await addQuestion(formData);
                setFormData({
                    subject: "",
                    chapter: "",
                    question: "",
                    answerKey: "",
                    hint: "",
                    month: "",
                });
                setAlert(true); // Set alert to true when the question is successfully submitted
            } catch (error) {
                console.error("Error post data:", error);
            }
        }
    };

    return (
        <>
            {alert && <Alert message={'Question added successfully'} type={'success'} />}
            <div className="w-full flex justify-center relative z-50">
                <div className="w-11/12 h-4/5 p-10 flex flex-col rounded-lg shadow-lg">
                    <h1 className="text-2xl font-semibold mb-4 self-center">Add Question</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Subject:</label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="h-full p-2 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                required
                            >
                                <option value="" disabled>
                                    Select Subject
                                </option>
                                {SUBJECTS.map((subject) => (
                                    <option key={subject} value={subject}>{subject}</option>
                                ))}
                            </select>
                        </div>
                        {(formData.subject === "QUANT" || formData.subject === "REASONING") && (
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Chapter</label>
                                <select
                                    name="chapter"
                                    value={formData.chapter}
                                    onChange={handleChange}
                                    className="h-full p-2 bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                >
                                    <option value="" >
                                        Select Chapter
                                    </option>
                                    {formData.subject === "QUANT"
                                        ? QUANT_CHAPTERS.map((chapter) => (
                                            <option key={chapter} value={chapter}>{chapter}</option>
                                        ))
                                        : formData.subject === "REASONING"
                                            ? REASONING_CHAPTERS.map((chapter) => (
                                                <option key={chapter} value={chapter}>{chapter}</option>
                                            ))
                                            : null
                                    }
                                </select>
                            </div>
                        )}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Month of question:</label>
                            <select
                                name="month"
                                id="month"
                                value={formData.month}
                                onChange={handleChange}
                                className="h-full p-2  bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                required
                            >
                                {MONTHS.map((month) => (
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
                                className='w-full p-2 border border-gray-300 rounded-md text-base mt-2'
                                rows="15"
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
                                className='w-full p-2 border border-gray-300 rounded-md text-base mt-2'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Hint:</label>
                            <textarea
                                name="hint"
                                value={formData.hint}
                                onChange={handleChange}
                                className='w-full p-2 border border-gray-300 rounded-md text-base mt-2'
                                rows="10"
                            />
                        </div>
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
            </div>
        </>
    );
}

export default AddQuestion;
