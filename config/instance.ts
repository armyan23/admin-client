import axios, { AxiosInstance } from "axios";
import { apiServer } from "./index";

let headers = {};

export const handleHeadersToken = (token: string) => {
  headers = { ...headers, token };
};

const instance: AxiosInstance = axios.create({
  baseURL: apiServer,
  headers,
});

export default instance;
