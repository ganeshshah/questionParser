export const API_CREATE_TEST = 'http://localhost:8080/test/createTestId?';
export const API_GET_QUESTIONS = 'http://localhost:8080/getQuestionsWithParam?'
export const API_GET_QRE_QUESTIONS = 'http://localhost:8080/qre/getQuestionsWithParam?'
export const API_LOAD_QUESTIONS = 'http://localhost:8080/proccessFile'
export const API_TEST_RESULT = 'http://localhost:8080/testData/getTestResultData?testId=';
export const API_EDIT_FORM = 'http://localhost:8080/editMcq'
export const API_EDIT_QRE_FORM = 'http://localhost:8080/qre/editMcq'
export const API_SUBMIT_QUESTION = "http://localhost:8080/testData/submitQuestion"
export const API_GET_REVISION_DATA = "http://localhost:8080/getRevisionData?";
export const API_GET_ALL_QUESTION_BY_IDS = "http://localhost:8080/getIncorrectQuestions?ids=";
export const API_GET_ALL_ANALYTICS_DATA = "http://localhost:8080/getAnalyticsData?byMonthOrMonthRange=";
export const API_ADD_QUESTION = "http://localhost:8080/addQuestionManually";
export const API_ADD_QRE_QUESTION = "http://localhost:8080/qre/addQuestion";
export const API_DELETE_QUESTION = "http://localhost:8080/deleteQuestionById/";
export const API_DELETE_QRE_QUESTION = "http://localhost:8080/qre/deleteQuestionById/";

export const MONTHS = [
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

export const SUBJECTS = ['RBI24X7', 'SPOTLIGHT', 'PIB24X7', 'CA', 'FINANCE', 'MANAGEMENT', 'ESI', 'QUANT', 'REASONING'];
export const ACCURACY = ['90', '80', '70', '60', '50', '40', '30', '20']

export const QUANT_CHAPTERS = ['Time And Work', 'Ratio and Proportion', 'Percentage', 'Average'];
export const REASONING_CHAPTERS = ['Syllogism'];