import axios from "axios";

const HOST = 'http://192.168.1.3:3100';
let store;
export const injectStore = (_store) => store = _store;

export const instance = axios.create({
  baseURL: HOST
});

export const authInstance = axios.create({
  baseURL: HOST
});

authInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);