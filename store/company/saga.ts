import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  postCreateCompanyRequest,
  postCreateCompanySuccess,
  postCreateCompanyFailure,
  getAllCompaniesRequest,
  getAllCompaniesSuccess,
  getAllCompaniesFailure,
  getCompanyByIdRequest,
  getCompanyByIdSuccess,
  getCompanyByIdFailure,
} from "./action";
import instance from "config/instance";

function* createCompany({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.post("/api/company", payload)
    );

    yield put(postCreateCompanySuccess(response.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(postCreateCompanyFailure(data.message));
  }
}

function* getAllCompany() {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.get("/api/company")
    );

    yield put(getAllCompaniesSuccess(response.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(getAllCompaniesFailure(data.message));
  }
}

function* getCompanyById({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.get(`/api/company/${payload}`)
    );

    yield put(getCompanyByIdSuccess(response.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(getCompanyByIdFailure(data.message));
  }
}

export default function* companySaga() {
  yield takeLatest(postCreateCompanyRequest, createCompany);
  yield takeLatest(getAllCompaniesRequest, getAllCompany);
  yield takeLatest(getCompanyByIdRequest, getCompanyById);
}
