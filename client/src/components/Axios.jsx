import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.mymemory.translated.net/get',
  withCredentials: true,
});

export default Axios;
