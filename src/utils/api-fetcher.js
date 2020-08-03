import axios from 'axios';

export const get = (url, params, options = {}) => axios.get(url, { params, ...options });

export const post = (url, data, options) => axios.post(url, data, options);

export const put = (url, data, options) => axios.put(url, data, options);

export const del = (url, options) => axios.delete(url, options);
