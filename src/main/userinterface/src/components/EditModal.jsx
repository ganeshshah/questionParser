import React, { useState, useEffect } from 'react';
import { editForm } from '../services'
import Loading from '../components/Loading'
import Alert from '../components/Alert'

function EditModal({ props, onClose, getQuestions }) {
  const [formData, setFormData] = useState(props);
  const [isSuccess, SetIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(false)

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSaveHandler = async () => {
    try {
      setLoading(true)
      const resData = await editForm(formData)
      setAlert(true)
      getQuestions()
      SetIsSuccess(true);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      {loading && <Loading />}
      {alert && <Alert message={"question deleted"} type={"success"} />}

      <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-40 flex justify-center items-center'>
        <div className='w-11/12 h-4/5 relative flex justify-center items-center'>

          <div className=" w-full h-full  p-10 flex flex-col gap-3 bg-gray-200 overflow-y-auto rounded-lg ">
            <p className='self-center text-xl'>Edit Question</p>
            <div>
              <label>ID:</label>
              <input
                className='w-full p-2 border border-gray-300 rounded-md text-base mt-2'
                type="text"
                name="id"
                value={formData.id}
                readOnly={true}
              />
            </div>
            <div>
              <label>Subject:</label>
              <input
                className='w-full p-2 border border-gray-300 rounded-md text-base mt-2'
                type="text"
                name="subject"
                value={formData.subject}
                readOnly={true}
              />
            </div>
            <div>
              <label>Question:</label>
              <textarea
                className='w-full h-60 p-2 border border-gray-300 rounded-md text-base mt-2'
                name="question"
                value={formData.question}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label>Answer Key:</label>
              <input
                className='w-full p-2 border border-gray-300 rounded-md text-base mt-2'
                type="text"
                name="answerKey"
                value={formData.answerKey}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label>Hint:</label>
              <textarea
                className='w-full p-2 border border-gray-300 rounded-md text-base mt-2'
                name="hint"
                value={formData.hint}
                onChange={onChangeHandler}
              />
            </div>
            <button onClick={onSaveHandler} className="px-4 mt-2 py-2 bg-green-500 text-white rounded-md cursor-pointer whitespace-nowrap" >
              Save
            </button>
            {isSuccess && <p className='text-green-400'>Data saved successfully</p>}
          </div>
          <span className='absolute top-10 right-10 bg-red-500 text-white border-none rounded-md py-1 px-2 cursor-pointer hover:bg-red-600 z-40' onClick={onClose}><button >Close</button></span>
        </div>
      </div>
    </>
  );
}

export default EditModal;
