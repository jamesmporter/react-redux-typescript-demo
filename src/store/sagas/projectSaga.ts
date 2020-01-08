import { all, call, put, getContext, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/projectActions";
import { PayloadAction } from "typesafe-actions";
import { Types } from "../types/projectTypes";
import { NewProject, Project } from "../objects/projectObjects";
import { wrap } from "./sagaHelpers";

function* createProject(
  action: PayloadAction<Types.CREATE_PROJECT_REQUEST, NewProject>
) {
  try {
    const getFirestore = yield getContext("getFirestore");
    const getState = yield getContext("getState");
    const state = getState();

    const profile = state.firebase.profile;
    const authorId = state.firebase.auth.uid;

    yield call(wrap, () => {
      return getFirestore()
        .collection("projects")
        .add(
          new Project(
            action.payload.title,
            action.payload.content,
            profile.firstName,
            profile.lastName,
            authorId
          ).toObject()
        );
    });
    yield put(actions.createProject.success());
  } catch (err) {
    yield put(actions.createProject.error(err));
  }
}

export default function* watcher() {
  yield all([takeEvery(Types.CREATE_PROJECT_REQUEST, createProject)]);
}
