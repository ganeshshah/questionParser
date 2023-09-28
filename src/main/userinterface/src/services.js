import { API_GET_QUESTIONS, API_CREATE_TEST, API_LOAD_QUESTIONS, API_TEST_RESULT, API_EDIT_FORM, API_SUBMIT_QUESTION } from './constants';
import axios from 'axios';

export const fetchQuestions = async (numQuestions, flag, subject, accuracy, month) => {
    const url = API_GET_QUESTIONS + 'numQuestions=' + numQuestions + '&flag='
        + flag + '&subject=' + subject + '&accuracy=' + accuracy + '&month=' + month

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

export const fetchTestId = async (subject, month) => {
    const url = API_CREATE_TEST + 'subject=' + subject + '&month=' + month

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

export const loadQuestions = async (body) => {
    const url = API_LOAD_QUESTIONS

    const response = await axios.post(url, body);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
        console.log('POST request successful!!!')
    }
    return await response.json();
}


export const fetchtestResult = async (testId) => {
    const url = API_TEST_RESULT + testId;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

export const editForm = async (formData) => {
    const response = await fetch(API_EDIT_FORM, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
        console.error('PUT request successfull!!!');
    }
}

export const submitQuestion = async (body) => {
    const url = API_SUBMIT_QUESTION

    const response = await axios.post(url, body);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
        console.log('POST request successful!!!')
    }
    return await response.json();
}