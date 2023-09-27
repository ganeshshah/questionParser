import { API_PATH } from '../src/constants/API_PATH';

//TODO: template for api call - keep all api calls here
const fetchData = (body) => {
    return axios
        .post(
            API_PATH, body
        )
        .then((response) => {
            return response.data;
        });
}