import { all, call, put, getContext, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";
import { PayloadAction } from "typesafe-actions";
import Types from "./types";
import { LoginCredentials, SignUpCredentials } from "./objects";
import { wrap } from "../util/sagaHelpers";

function* signIn(action: PayloadAction<Types.LOGIN_REQUEST, LoginCredentials>) {
  try {
    const credentials = action.payload;
    const getFirebase = yield getContext("getFirebase");

    yield call(wrap, () => {
      return getFirebase()
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
    });

    yield put(actions.signIn.success());
  } catch (err) {
    yield put(actions.signIn.error(err));
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
    yield put(actions.signOut.success());
  } catch (err) {
    yield put(actions.signOut.error(err));
  }
}
function* signUp(
  action: PayloadAction<Types.SIGNUP_REQUEST, SignUpCredentials>
) {
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

    yield put(actions.signUp.success());
  } catch (err) {
    yield put(actions.signUp.error(err));
  }
}

export default function* watcher() {
  yield all([
    takeEvery(Types.LOGIN_REQUEST, signIn),
    takeEvery(Types.SIGNOUT_REQUEST, signOut),
    takeEvery(Types.SIGNUP_REQUEST, signUp)
  ]);
}
