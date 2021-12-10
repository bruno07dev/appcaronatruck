import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://nodedeploy.brunomison.com.br/',
});

export default api;
