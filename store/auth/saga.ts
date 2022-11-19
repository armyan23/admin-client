import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
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
import instance from "config/instance";

function* registerFunction({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.post("/api/auth/register", payload)
    );

    yield put(postRegisterSuccess(response.data.message));
  } catch (err: any) {
    const { data } = err.response;
    yield put(postRegisterFailure(data.message));
  }
}

function* verifyFunction({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.post("/api/auth/register/verify", payload)
    );
    yield put(postVerifySuccess(response.data.message));
  } catch (err: any) {
    const { data } = err.response;
    yield put(postVerifyFailure(data.message));
  }
}

function* loginFunction({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.post("/api/auth/sign-in", payload)
    );
    localStorage.setItem(
      "user",
      JSON.stringify({ token: response?.data?.data?.userToken })
    );
    yield put(postLoginSuccess(response.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(postLoginFailure(data.message));
  }
}

export default function* authSaga() {
  yield takeLatest(postRegisterRequest, registerFunction);
  yield takeLatest(postVerifyRequest, verifyFunction);
  yield takeLatest(postLoginRequest, loginFunction);
}
