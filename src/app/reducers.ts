import * as ReduxTypes from "ReduxTypes";
import Types from "./types";

const messageReducer = (state: String = "", action: ReduxTypes.AnyAction) => {
  switch (action.type) {
    case Types.UPDATE_NAME:
      return action.payload;
    case Types.CLEAR_NAME:
      return "";
    default:
      return state;
  }
};

export default messageReducer;
