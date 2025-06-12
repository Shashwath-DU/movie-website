import axios from 'axios';
export default axios.create({
    baseURL: '',
    headers: {"ngrok-skip-browser-warning":"true"}
});

//https://9c96-103-106-239-104.ap.ngrok.io