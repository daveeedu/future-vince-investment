import axios from 'axios';
import Alert from './alert';

const config = {
 backendUrl: "http://localhost:7000/v1",
}
// path = require('path'),
// Alert = require(path.resolve('utils', 'alert'))


const API = axios.create({
 baseURL: config.backendUrl,
 timeout: 10000
});

API.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

API.defaults.timeout = 10000;

const handleSessionExpired = (error) => {
 const cb = () => window.location.href = '#/login',
 message = 'Session expired, please login again';

 if (error.response.status === 401) {
  localStorage.removeItem('token');
  Alert({type: 'error', message, cb});
  
 }else if(error.response.status === 400 && error.response.data.message.indexOf('no token') > -1){
  Alert({type: 'error', message});
 }
 else {
  return Promise.reject(error.response.data);
 }
};

const handleSuccess = (response) => {
 return response;
};

API.interceptors.response.use(handleSuccess, handleSessionExpired)

API.interceptors.request.use(config => {
 const cb = () => setTimeout(_=>window.location.href = '/', 2000),
 message = 'Session expired, please login again';

 if(localStorage.getItem('token') === null && window.location.href.indexOf('/Login') === -1 && window.location.href !== 'http://localhost:3000/'){
  Alert({type: 'error', message});
 }

 return config;
}
, error => {
 return Promise.reject(error);
});


export default API;