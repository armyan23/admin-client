import { put, takeLatest } from "@redux-saga/core/effects";
import {
  profileDataRequest,
  profileDataSuccess,
  profileDataFailure,
  updateUserDetailsRequest,
  updateUserDetailsSuccess,
  updateUserDetailsFailure,
  deleteUserImageRequest,
  deleteUserImageSuccess,
  deleteUserImageFailure,
} from "./actions";
import { AxiosResponse } from "axios";
import { call } from "redux-saga/effects";
import instance from "config/instance";

function* profileData() {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.get(`/api/profile`)
    );

    yield put(profileDataSuccess(response.data.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(profileDataFailure(data.message));
  }
}

function* updateUserDetails({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.put(`/api/profile/user-details`, payload)
    );

    yield put(updateUserDetailsSuccess(response.data.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(updateUserDetailsFailure(data.message));
  }
}

function* deleteUserImage() {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.delete(`/api/profile/delete-image`)
    );

    yield put(deleteUserImageSuccess(response.data.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(deleteUserImageFailure(data.message));
  }
}

export default function* profile() {
  yield takeLatest(profileDataRequest, profileData);
  yield takeLatest(updateUserDetailsRequest, updateUserDetails);
  yield takeLatest(deleteUserImageRequest, deleteUserImage);
}
