import {
    API_GET_QUESTIONS, API_CREATE_TEST, API_LOAD_QUESTIONS, API_TEST_RESULT, API_EDIT_FORM, API_SUBMIT_QUESTION, API_GET_REVISION_DATA,
    API_GET_ALL_QUESTION_BY_IDS, API_GET_ALL_ANALYTICS_DATA, API_ADD_QUESTION, API_DELETE_QUESTION
} from '../common/constants';
import axios from 'axios';

export const fetchQuestions = async (numQuestions, flag, subject, accuracy, month) => {
    const url = API_GET_QUESTIONS + 'numQuestions=' + numQuestions + '&flag='
        + flag + '&subject=' + subject + '&accuracy=' + accuracy + '&month=' + month

    const response = await fetch(url);

    if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

export const fetchTestId = async (subject, month) => {
    const url = API_CREATE_TEST + 'subject=' + subject + '&month=' + month

    const response = await fetch(url);

    if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

export const loadQuestions = async (body) => {
    const url = API_LOAD_QUESTIONS

    const response = await axios.post(url, body);
    if (response.status == 200) {
        console.log('POST request successful!!!')
    } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response;
}


export const fetchtestResult = async (testId) => {
    const url = API_TEST_RESULT + testId;

    const response = await fetch(url);

    if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
}

export const editForm = async (formData) => {
    const response = await fetch(API_EDIT_FORM, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (response.status == 200) {
        console.log('PUT request successfull!!!');
    } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
}

export const submitQuestion = async (body) => {
    const url = API_SUBMIT_QUESTION

    const response = await axios.post(url, body);
    if (response.status == 200) {
        console.log('POST request successful!!!')
    } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response;
}

export const fetchRevisionData = async (month, subject) => {
    const url = API_GET_REVISION_DATA + 'byMonthOrAll=' + month + '&subject=' + subject

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}


export const fetchAllQuestions = async (params) => {
    const url = API_GET_ALL_QUESTION_BY_IDS + params

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

export const fetchAnalyticsData = async (params) => {
    const url = API_GET_ALL_ANALYTICS_DATA + params

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}


export const addQuestion = async (body) => {
    const url = API_ADD_QUESTION

    const response = await axios.post(url, body);
    if (response.status == 200) {
        console.log('POST request successful!!!')
    } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response;
}


export const deleteQuestionById = async (questionId) => {
    const url = API_DELETE_QUESTION + questionId

    const response = await axios.delete(url);
    if (response.status == 200) {
        console.log('POST request successful!!!')
    } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response;
}