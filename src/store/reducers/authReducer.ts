import * as ReduxTypes from "ReduxTypes";
import { Types } from "../types/authTypes";

const initState = {
  authError: null
};

const authReducer = (state = initState, action: ReduxTypes.AnyAction) => {
  switch (action.type) {
    case Types.LOGIN_ERROR:
      return {
        ...state,
        authError: "Login failed"
      };

    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };

    case Types.SIGNOUT_SUCCESS:
      return state;

    case Types.SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      };

    case Types.SIGNUP_ERROR:
      return {
        ...state,
        authError: action.payload.message
      };

    default:
      return state;
  }
};

export default authReducer;
