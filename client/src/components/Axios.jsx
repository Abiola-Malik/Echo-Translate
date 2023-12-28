import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://echo-translate-server.vercel.app',
  withCredentials: true,
});

export default Axios;
