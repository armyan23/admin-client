import { all } from "@redux-saga/core/effects";
import example from "./example/saga";
import authSaga from "./auth/saga";
import companySaga from "./company/saga";

function* rootSaga() {
  yield all([example(), authSaga(), companySaga()]);
}

export default rootSaga;
