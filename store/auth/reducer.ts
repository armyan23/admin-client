import { handleActions } from "redux-actions";
import {
  logout,
  postIsAuthenticatedFailure,
  postIsAuthenticatedRequest,
  postIsAuthenticatedSuccess,
  postLoginFailure,
  postLoginRequest,
  postLoginSuccess,
  postRegisterFailure,
  postRegisterRequest,
  postRegisterSuccess,
  postVerifyFailure,
  postVerifyRequest,
  postVerifySuccess,
} from "./action";

interface IAuth {
  registerRequest: boolean;
  registerSuccess: boolean;
  registerFailure: boolean;
  verifyRequest: boolean;
  verifySuccess: boolean;
  verifyFailure: boolean;
  loginRequest: boolean;
  loginSuccess: boolean;
  loginFailure: boolean;
  isAuthenticatedRequest: boolean;
  isAuthenticatedSuccess: boolean;
  isAuthenticatedFailure: boolean;
  isAuthenticated: boolean;
  data: object | [];
  successMessage: string;
  errorMessage: string;
}
const initialValue: IAuth = {
  registerRequest: false,
  registerSuccess: false,
  registerFailure: false,
  verifyRequest: false,
  verifySuccess: false,
  verifyFailure: false,
  loginRequest: false,
  loginSuccess: false,
  loginFailure: false,
  isAuthenticatedRequest: false,
  isAuthenticatedSuccess: false,
  isAuthenticatedFailure: false,
  isAuthenticated: false,
  data: {},
  successMessage: "",
  errorMessage: "",
};

const authReducer = handleActions(
  {
    // Register reducer
    [postRegisterRequest]: (state: IAuth) => ({
      ...state,
      registerRequest: true,
      registerSuccess: false,
      registerFailure: false,
    }),
    [postRegisterSuccess]: (state: IAuth, { payload }: any) => ({
      ...state,
      registerRequest: false,
      registerSuccess: true,
      registerFailure: false,
      successMessage: payload,
    }),
    [postRegisterFailure]: (state: IAuth, { payload }: any) => ({
      ...state,
      registerRequest: false,
      registerSuccess: false,
      registerFailure: true,
      errorMessage: payload,
    }),

    //  Verify reducer
    [postVerifyRequest]: (state: IAuth) => ({
      ...state,
      verifyRequest: true,
      verifySuccess: false,
      verifyFailure: false,
    }),
    [postVerifySuccess]: (state: IAuth, { payload }: any) => ({
      ...state,
      verifyRequest: false,
      verifySuccess: true,
      verifyFailure: false,
      successMessage: payload,
    }),
    [postVerifyFailure]: (state: IAuth, { payload }: any) => ({
      ...state,
      verifyRequest: false,
      verifySuccess: false,
      verifyFailure: true,
      errorMessage: payload,
    }),

    //  Login reducer
    [postLoginRequest]: (state: IAuth) => ({
      ...state,
      loginRequest: true,
      loginSuccess: false,
      loginFailure: false,
    }),
    [postLoginSuccess]: (state: IAuth, { payload }: any) => ({
      ...state,
      loginRequest: false,
      loginSuccess: true,
      loginFailure: false,
      isAuthenticated: true,
      data: payload,
    }),
    [postLoginFailure]: (state: IAuth, { payload }: any) => ({
      ...state,
      loginRequest: false,
      loginSuccess: false,
      loginFailure: true,
      errorMessage: payload,
    }),

    //  Is Login reducer
    [postIsAuthenticatedRequest]: (state: IAuth) => ({
      ...state,
      isAuthenticatedRequest: true,
      isAuthenticatedSuccess: false,
      isAuthenticatedFailure: false,
    }),
    [postIsAuthenticatedSuccess]: (state: IAuth) => ({
      ...state,
      isAuthenticatedRequest: false,
      isAuthenticatedSuccess: true,
      isAuthenticatedFailure: false,
      isAuthenticated: true,
    }),
    [postIsAuthenticatedFailure]: (state: IAuth, { payload }: any) => ({
      ...state,
      isAuthenticatedRequest: false,
      isAuthenticatedSuccess: false,
      isAuthenticatedFailure: true,
      errorMessage: payload,
    }),
    [logout]: () => ({
      ...initialValue,
    }),
  },
  initialValue
);

export default authReducer;
