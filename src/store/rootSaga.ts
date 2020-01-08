import { all } from "redux-saga/effects";
import { authSagaWatcher } from "./auth";
import { projectSagaWatcher } from "./project";

export default function* rootSaga() {
  yield all([authSagaWatcher(), projectSagaWatcher()]);
}
