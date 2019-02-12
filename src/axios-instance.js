import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://restcountries.eu/'
});

export default instance;