import { all } from "redux-saga/effects";
import authWatcher from "./authSaga";
import projectWatcher from "./projectSaga";

export default function* rootSaga() {
  yield all([authWatcher(), projectWatcher()]);
}
