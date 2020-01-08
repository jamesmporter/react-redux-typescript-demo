import * as ReduxTypes from "ReduxTypes";
import { Types } from "../types/projectTypes";

const initState = {};

const projectReducer = (state = initState, action: ReduxTypes.AnyAction) => {
  switch (action.type) {
    case Types.CREATE_PROJECT_SUCCESS:
      return state;
    case Types.CREATE_PROJECT_ERROR:
      return state;
    default:
      return state;
  }
};

export default projectReducer;
