
import axios from 'axios';

export const baseUrl = `${process.env.REACT_APP_API_URL}`;

export const request = axios.create({
  baseURL: baseUrl,
  params: {
    apikey: `${process.env.REACT_APP_API_KEY}`
  },
  timeout: 1000
});

export default request;