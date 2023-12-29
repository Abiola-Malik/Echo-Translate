import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.mymemory.translated.net',
});

export default Axios;
