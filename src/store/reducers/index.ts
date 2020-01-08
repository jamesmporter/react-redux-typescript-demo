import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import { ProfileInbound } from "../objects/profileObjects";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: (state: any, action: any) =>
    firebaseReducer<ProfileInbound>(state, action)
});

export default rootReducer;

// the key name will be the data property on the state object
