import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://restcountries.eu/'
});

// instance.interceptors.request.use(req => {
//     console.log('[In request interceptor]' ,req);
//     return req;
// });

// instance.interceptors.response.use(res => {
//    console.log('[In response interceptor]' ,res);
//    return res;
// }, error => {
//     console.log('[In response error intercetor]', error);
//     throw error;
// });

export default instance;