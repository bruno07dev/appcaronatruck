import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nodedeploy.brunomison.com.br/',
});

export default api;
