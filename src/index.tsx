import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import rootReducer from "./app/reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App job="Developer" />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
