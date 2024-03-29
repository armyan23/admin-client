import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  createAdminRequest,
  createAdminSuccess,
  createAdminFailure,
  allAdminsRequest,
  allAdminsSuccess,
  allAdminsFailure,
  changeAdminPasswordRequest,
  changeAdminPasswordSuccess,
  changeAdminPasswordFailure,
  deleteAdminRequest,
  deleteAdminSuccess,
  deleteAdminFailure,
} from "./action";
import instance from "config/instance";

function* createAdmin({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.post("/api/admin", payload)
    );

    yield put(createAdminSuccess(response.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(createAdminFailure(data.message));
  }
}

function* changeAdminPassword({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.put(`/api/admin/${payload.id}`, payload.values)
    );

    yield put(changeAdminPasswordSuccess(response.data.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(changeAdminPasswordFailure(data.message));
  }
}

function* getAdmins() {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.get(`/api/admin`)
    );

    yield put(allAdminsSuccess(response.data.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(allAdminsFailure(data.message));
  }
}

function* deleteAdmin({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.delete(`/api/admin/${payload}`)
    );

    yield put(deleteAdminSuccess(response.data.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(deleteAdminFailure(data.message));
  }
}

export default function* adminSaga() {
  yield takeLatest(createAdminRequest, createAdmin);
  yield takeLatest(allAdminsRequest, getAdmins);
  yield takeLatest(changeAdminPasswordRequest, changeAdminPassword);
  yield takeLatest(deleteAdminRequest, deleteAdmin);
}
