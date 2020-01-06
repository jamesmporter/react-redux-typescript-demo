import { call, put, getContext, takeEvery } from "redux-saga/effects";

/**
 * This function exists because @function [call] does not accept the firebase function directly.
 *
 * @param {*} firebase
 * @param {*} credentials
 */
async function signInWithEmailAndPassword(firebase, credentials) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password);
}

function* signIn(action) {
  try {
    const credentials = action.payload;
    const getFirebase = yield getContext("getFirebase");

    console.log("Before delay");
    yield call(signInWithEmailAndPassword, getFirebase(), credentials);

    yield put({ type: "LOGIN_SUCCESS" });
  } catch (e) {
    yield put({ type: "LOGIN_ERROR", err: e });
  }
}

export default function* watchSignIn() {
  yield takeEvery("LOGIN_REQUEST", signIn);
}
