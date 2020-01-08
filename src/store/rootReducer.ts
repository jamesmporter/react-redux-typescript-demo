import authReducer from "./auth";
import projectReducer from "./project/reducers";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import { ProfileObjects } from "./profile";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: (state: any, action: any) =>
    firebaseReducer<ProfileObjects.ProfileInbound>(state, action)
});

export default rootReducer;

// the key name will be the data property on the state object
