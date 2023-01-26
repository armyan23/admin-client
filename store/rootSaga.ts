import { all } from "@redux-saga/core/effects";
import example from "./example/saga";
import authSaga from "./auth/saga";
import profile from "./profile/saga";
import companySaga from "./company/saga";
import employeeSaga from "./employee/saga";
import adminSaga from "./admin/saga";

function* rootSaga() {
  yield all([
    example(),
    authSaga(),
    profile(),
    companySaga(),
    employeeSaga(),
    adminSaga(),
  ]);
}

export default rootSaga;
