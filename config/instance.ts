import axios, { AxiosInstance } from "axios";
import { apiServer } from "./index";

const headers = {};

export const putHeadersToken = (token: string) => {
  instance.defaults.headers["token"] = token;
};

const instance: AxiosInstance = axios.create({
  baseURL: apiServer,
  headers,
});

export default instance;
