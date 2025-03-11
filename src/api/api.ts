import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cinemaguide.skillbox.cc',
  timeout: 1000
});

export default api;