// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend URL
});

export default {
  shortenURL: (payload) => api.post('/shorten-url', payload),
  getOriginalURL: (shortcode) => api.get(`/original-url/${shortcode}`),
};
