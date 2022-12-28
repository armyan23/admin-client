import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  postCreateEmployeeRequest,
  postCreateEmployeeSuccess,
  postCreateEmployeeFailure,
  editEmployeeRequest,
  editEmployeeSuccess,
  editEmployeeFailure,
  deleteEmployeeImageRequest,
  deleteEmployeeImageSuccess,
  deleteEmployeeImageFailure,
  getEmployeesRequest,
  getEmployeesSuccess,
  getEmployeesFailure,
  employeeByIdRequest,
  employeeByIdSuccess,
  employeeByIdFailure,
  deleteEmployeeRequest,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
  restoreEmployeeRequest,
  restoreEmployeeSuccess,
  restoreEmployeeFailure,
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

function* editEmployee({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.put(`/api/employee/edit/${payload.id}`, payload.data)
    );

    yield put(editEmployeeSuccess(response.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(editEmployeeFailure(data.message));
  }
}

function* deleteEmployeeImage({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      instance.delete(`/api/employee/delete-image/${payload}`)
    );

    yield put(deleteEmployeeImageSuccess(response.data));
  } catch (err: any) {
    const { data } = err.response;
    yield put(deleteEmployeeImageFailure(data.message));
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

    yield put(deleteEmployeeSuccess({ ...response.data, id: payload }));
  } catch (err: any) {
    const { data } = err.response;
    yield put(deleteEmployeeFailure(data.message));
  }
}

function* restoreEmployee({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() => {
      return instance.post(`/api/employee/restore/${payload}`);
    });

    yield put(restoreEmployeeSuccess({ ...response.data, id: payload }));
  } catch (err: any) {
    const { data } = err.response;
    yield put(restoreEmployeeFailure(data.message));
  }
}

export default function* employeeSaga() {
  yield takeLatest(postCreateEmployeeRequest, createEmployee);
  yield takeLatest(editEmployeeRequest, editEmployee);
  yield takeLatest(deleteEmployeeImageRequest, deleteEmployeeImage);
  yield takeLatest(getEmployeesRequest, getAllEmployees);
  yield takeLatest(employeeByIdRequest, getEmployeeById);
  yield takeLatest(deleteEmployeeRequest, deleteEmployee);
  yield takeLatest(restoreEmployeeRequest, restoreEmployee);
}
