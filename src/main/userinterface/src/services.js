import { API_PATH, API_GET_QUESTIONS } from './constants';

//TODO: template for api call - keep all api calls here
export const fetchQuestions = async (numQuestions, flag, subject, accuracy, month) => {
    const url = API_GET_QUESTIONS + 'numQuestions=' + numQuestions + '&flag='
        + flag + '&subject=' + subject + '&accuracy=' + accuracy + '&month=' + month

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}