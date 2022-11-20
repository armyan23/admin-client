import Router from "next/router";
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

export const logoutAction = () => {
  localStorage.removeItem("user");
  delete instance.defaults.headers["token"];
  Router.push("/");
};

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Router.push("/server-error");
    console.log("Axios response error ", error);
    return error;
  }
);
export default instance;
