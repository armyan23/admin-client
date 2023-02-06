import Router from "next/router";
import axios, { AxiosInstance } from "axios";
import { apiServer } from "./index";

const headers = {};

export const putLocalUserInfo = (item: object) => {
  const user = JSON.parse(localStorage.getItem("user") || "");
  localStorage.setItem("user", JSON.stringify({ ...user, ...item }));
};

export const putHeadersToken = (token: string) => {
  instance.defaults.headers["token"] = token;
};

export const putHeadersCompany = (company: string) => {
  instance.defaults.headers["company"] = company;
};

const instance: AxiosInstance = axios.create({
  baseURL: apiServer,
  headers,
});

export const logoutAction = () => {
  localStorage.removeItem("user");
  delete instance.defaults.headers["token"];
  delete instance.defaults.headers["company"];
  Router.push("/");
};

// instance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     // Router.push("/server-error");
//     if (error.response.data.message === "Invalid token.") {
//       Router.push("/");
//       logoutAction();
//     }
//     return error;
//   }
// );
export default instance;
