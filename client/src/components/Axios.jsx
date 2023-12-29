import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://echo-translate-server.onrender.com/api',
  withCredentials: true,
});

export default Axios;
