import axios from 'axios';

export const HTTP = axios.create({
    //baseURL: 'http://127.0.0.1:8000/api/v1'
    baseURL: 'http://185.135.82.172:8000/api/v1'
});