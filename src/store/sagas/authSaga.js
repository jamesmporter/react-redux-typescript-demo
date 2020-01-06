import { all, call, put, getContext, takeEvery } from "redux-saga/effects";

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

async function signOutABC(firebase) {
  return firebase.auth().signOut();
}

async function signUpABC(firebase, newUser) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password);
}

async function setUserOnFirestore(firestore, uid, newUser) {
  return firestore
    .collection("users")
    .doc(uid)
    .set({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      initials: newUser.firstName[0] + newUser.lastName[0]
    });
}

function* signIn(action) {
  try {
    const credentials = action.payload;
    const getFirebase = yield getContext("getFirebase");

    yield call(signInWithEmailAndPassword, getFirebase(), credentials);

    yield put({ type: "LOGIN_SUCCESS" });
  } catch (err) {
    yield put({ type: "LOGIN_ERROR", err });
  }
}

function* signOut() {
  const getFirebase = yield getContext("getFirebase");

  try {
    yield call(signOutABC, getFirebase());
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
    const response = yield call(signUpABC, getFirebase(), newUser);
    yield call(setUserOnFirestore, getFirestore(), response.user.uid, newUser);
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
