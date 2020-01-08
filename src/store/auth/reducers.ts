import * as ReduxTypes from "ReduxTypes";
import Types from "./types";

interface Auth {
  authError: string | null;
}

const initState: Auth = {
  authError: null
};

const authReducer = (state: Auth = initState, action: ReduxTypes.AnyAction) => {
  switch (action.type) {
    case Types.LOGIN_ERROR:
      return {
        authError: "Login failed"
      };
    case Types.LOGIN_SUCCESS:
      return {
        authError: null
      };
    case Types.SIGNOUT_SUCCESS:
      return {
        authError: null
      };
    case Types.SIGNUP_SUCCESS:
      return {
        authError: null
      };
    case Types.SIGNUP_ERROR:
      return {
        authError: action.payload.message
      };
    default:
      return state;
  }
};

export default authReducer;
