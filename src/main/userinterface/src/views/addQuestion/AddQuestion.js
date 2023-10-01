import React, { useState } from "react";
import { addQuestion } from "../../services";
import Alert from '../../components/Alert'

function AddQuestion() {
    const [formData, setFormData] = useState({
        subject: "",
        question: "",
        answerKey: "",
        hint: "",
        month: "",
    });
    const [alert, setAlert] = useState();

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

        if (formData != null) {
            try {
                const resData = await addQuestion(formData);
                setFormData({
                    subject: "",
                    question: "",
                    answerKey: "",
                    hint: "",
                    month: "",
                });
                setAlert(true)
            } catch (error) {
                console.error("Error post data:", error);
            }
        }
    };

    return (
        <>
            {alert && <Alert message={'successfully sent'} type={'success'} />}
            <div className="w-full flex justify-center relative z-50">

                <div className=" w-11/12 h-4/5 p-10 flex flex-col  rounded-lg  shadow-lg">
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
                                className="h-full p-2  bg-white border border-gray-300 hover:border-gray-400 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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
                                className='w-full p-2 border border-gray-300 rounded-md text-base mt-2'
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
                </div >
            </div>
        </>
    );
}

export default AddQuestion;
