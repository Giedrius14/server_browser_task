import axios from 'axios';
import ApiClient from './apiClient';
import HttpAdapter from './httpAdapter';

const api = new ApiClient(
  new HttpAdapter(
    axios.create({
      baseURL: 'https://playground.tesonet.lt/v1',
    })
  )
);

export default api;
