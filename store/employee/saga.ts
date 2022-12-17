import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  postCreateEmployeeRequest,
  postCreateEmployeeSuccess,
  postCreateEmployeeFailure,
  getEmployeesRequest,
  getEmployeesSuccess,
  getEmployeesFailure,
  employeeByIdRequest,
  employeeByIdSuccess,
  employeeByIdFailure,
  deleteEmployeeRequest,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
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

function* getAllEmployees({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.get(`/api/employee/all?type=${payload.type}`)
    );

    yield put(getEmployeesSuccess(response.data.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(getEmployeesFailure(data.message));
  }
}

function* getEmployeeById({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.get(`/api/employee/${payload}`)
    );

    yield put(employeeByIdSuccess(response.data.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(employeeByIdFailure(data.message));
  }
}

function* deleteEmployee({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() => {
      return instance.delete(`/api/employee/delete/${payload}`);
    });

    yield put(deleteEmployeeSuccess(response.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(deleteEmployeeFailure(data.message));
  }
}

export default function* employeeSaga() {
  yield takeLatest(postCreateEmployeeRequest, createEmployee);
  yield takeLatest(getEmployeesRequest, getAllEmployees);
  yield takeLatest(employeeByIdRequest, getEmployeeById);
  yield takeLatest(deleteEmployeeRequest, deleteEmployee);
}
