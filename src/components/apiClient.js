import axios from 'axios';


const apiClient = () => {

const {REACT_APP_API_URL } = process.env;
const axioxInstance = axios.create({
    baseURL: REACT_APP_API_URL,
    responseType: "json",
});

return axioxInstance;

}
export default apiClient;