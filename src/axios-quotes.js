import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-project-90828.firebaseio.com/'
});

export default instance;