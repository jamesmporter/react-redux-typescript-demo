import { all, call, put, getContext, takeEvery } from "redux-saga/effects";

/**
 * This function exists because @function [call] does not accept the firebase function directly.
 * @param {*} fn
 */
async function wrap(fn) {
  return fn();
}

function* signIn(action) {
  try {
    const credentials = action.payload;
    const getFirebase = yield getContext("getFirebase");

    yield call(wrap, () => {
      return getFirebase()
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
    });

    yield put({ type: "LOGIN_SUCCESS" });
  } catch (err) {
    console.log(err);
    yield put({ type: "LOGIN_ERROR", err });
  }
}

function* signOut() {
  const getFirebase = yield getContext("getFirebase");

  try {
    yield call(wrap, () => {
      return getFirebase()
        .auth()
        .signOut();
    });
    yield put({ type: "SIGNOUT_SUCCESS" });
  } catch (err) {
    yield put({ type: "SIGNOUT_ERROR", err });
  }
}
function* signUp(action) {
  const newUser = action.payload;
  const getFirebase = yield getContext("getFirebase");
  const getFirestore = yield getContext("getFirestore");

  try {
    const response = yield call(wrap, () => {
      return getFirebase()
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password);
    });

    yield call(wrap, () => {
      return getFirestore()
        .collection("users")
        .doc(response.user.uid)
        .set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0]
        });
    });

    yield put({ type: "SIGNUP_SUCCESS" });
  } catch (err) {
    yield put({ type: "SIGNUP_ERROR", err });
  }
}

export default function* watchSignIn() {
  yield all([
    takeEvery("LOGIN_REQUEST", signIn),
    takeEvery("SIGNOUT_REQUEST", signOut),
    takeEvery("SIGNUP_REQUEST", signUp)
  ]);
}
