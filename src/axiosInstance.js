import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://country-info-ditinus-api.onrender.com/api',  // Backend base URL
});

export default axiosInstance;
