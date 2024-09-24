import axios from "axios";

const HOST = 'http://192.168.1.3:3100';

export const instance = axios.create({
  baseURL: HOST
});