import { call, put, takeLatest } from "redux-saga/effects";
import { login } from "./api";
import { AuthActionTypes } from "./actions.type";

function* loginSaga(action: {
  type: AuthActionTypes;
  payload: { email: string; password: string };
}): any {
  try {
    yield put({ type: "LOGIN_REQUEST" });
    const result = yield call(
      login,
      action.payload.email,
      action.payload.password
    );
    yield put({ type: "LOGIN_SUCCESS" });
  } catch (error: any) {
    yield put({ type: "LOGIN_FAILURE", payload: { message: error.message } });
  }
}

export function* rootSaga() {
  yield takeLatest("LOGIN", loginSaga);
}
