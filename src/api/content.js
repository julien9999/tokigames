import axios from 'axios';
import axiosRetry from 'axios-retry';
import config from '../config';

axiosRetry(axios, {
  retries: 2,
  retryCondition: error => error.response.status >= 500
});

export const getFlightsCheap = () => {
  return axios.get(`${config.mwUrl}/flights/cheap`);
};

export const getFlightsBusiness= () => {
  return axios.get(`${config.mwUrl}/flights/business`);
};
