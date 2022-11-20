import { createAction } from "redux-actions";

export const postRegisterRequest: any = createAction("POST_REGISTER_REQUEST");
export const postRegisterSuccess: any = createAction("POST_REGISTER_SUCCESS");
export const postRegisterFailure: any = createAction("POST_REGISTER_FAILURE");

export const postVerifyRequest: any = createAction("POST_VERIFY_REQUEST");
export const postVerifySuccess: any = createAction("POST_VERIFY_SUCCESS");
export const postVerifyFailure: any = createAction("POST_VERIFY_FAILURE");

export const postLoginRequest: any = createAction("POST_LOGIN_REQUEST");
export const postLoginSuccess: any = createAction("POST_LOGIN_SUCCESS");
export const postLoginFailure: any = createAction("POST_LOGIN_FAILURE");

export const postIsAuthenticatedRequest: any = createAction(
  "POST_IS_AUTHENTICATED_REQUEST"
);
export const postIsAuthenticatedSuccess: any = createAction(
  "POST_IS_AUTHENTICATED_SUCCESS"
);
export const postIsAuthenticatedFailure: any = createAction(
  "POST_IS_AUTHENTICATED_FAILURE"
);
