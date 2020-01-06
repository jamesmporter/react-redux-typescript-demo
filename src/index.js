import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebaseApp from "./config/fbConfig";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/sagas";
import { createFirestoreInstance } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware({
  context: {
    // Add "firebase" and "firestore" as a const/enum somewhere
    getFirebase,
    getFirestore
  }
});

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  logErrors: false
};

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    reduxFirestore(firebaseApp)
  )
);

sagaMiddleware.run(rootSaga);

const rrfProps = {
  firebase: firebaseApp,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
