import { all } from "@redux-saga/core/effects";
import example from "./example/saga";
import authSaga from "./auth/saga";

function* rootSaga() {
  yield all([example(), authSaga()]);
}

export default rootSaga;
