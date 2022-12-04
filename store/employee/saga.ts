import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  postCreateEmployeeRequest,
  postCreateEmployeeSuccess,
  postCreateEmployeeFailure,
  getEmployeesRequest,
  getEmployeesSuccess,
  getEmployeesFailure,
} from "./action";
import instance from "config/instance";

function* createEmployee({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.post("/api/employee/create", payload)
    );

    yield put(postCreateEmployeeSuccess(response.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(postCreateEmployeeFailure(data.message));
  }
}

function* getAllEmployees() {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.get("/api/employee/all")
    );

    yield put(getEmployeesSuccess(response.data.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(getEmployeesFailure(data.message));
  }
}

// function* getEmployeeById({ payload }: any) {
//   try {
//     const response: AxiosResponse = yield call(() =>
//       instance.get(`/api/company/${payload}`)
//     );
//
//     // yield put((response.data));
//   } catch (err: any) {
//     const { data } = err.response;
//     // yield put((data.message));
//   }
// }

export default function* employeeSaga() {
  yield takeLatest(postCreateEmployeeRequest, createEmployee);
  yield takeLatest(getEmployeesRequest, getAllEmployees);
  // yield takeLatest(, getEmployeeById);
}
