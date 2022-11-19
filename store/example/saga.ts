import { put, takeLatest } from "@redux-saga/core/effects";
import {
  getExampleFailure,
  getExampleRequest,
  getExampleSuccess,
} from "./actions";

function* getExample({ payload }: any) {
  try {
    if (payload) {
      yield put(getExampleSuccess(payload));
    }
  } catch (error: any) {
    yield getExampleFailure("Failure");
  }
}

export default function* example() {
  yield takeLatest(getExampleRequest, getExample);
}
