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

export const loginAction = (data: any) => {
  if (data.data.companyToken) {
    Router.push("/dashboard/home");
  } else {
    Router.push("/dashboard/company/add");
  }
};

// instance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     // Router.push("/server-error");
//     if (error.response.data.message === "Invalid token.") {
//       Router.push("/login");
//       logoutAction();
//     }
//     return error;
//   }
// );
export default instance;
