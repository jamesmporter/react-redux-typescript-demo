import { LoginCredentials, SignUpCredentials } from "./objects";
import { action } from "typesafe-actions";
import Types from "./types";

export const signIn = {
  request: (credentials: LoginCredentials) => {
    return action(Types.LOGIN_REQUEST, credentials);
  },
  success: () => {
    return action(Types.LOGIN_SUCCESS);
  },
  error: (e: Error) => {
    return action(Types.LOGIN_ERROR, e);
  }
};

export const signOut = {
  request: () => {
    return action(Types.SIGNOUT_REQUEST);
  },
  success: () => {
    return action(Types.SIGNOUT_SUCCESS);
  },
  error: (e: Error) => {
    return action(Types.SIGNOUT_ERROR, e);
  }
};

export const signUp = {
  request: (credentials: SignUpCredentials) => {
    return action(Types.SIGNUP_REQUEST, credentials);
  },
  success: () => {
    return action(Types.SIGNUP_SUCCESS);
  },
  error: (e: Error) => {
    return action(Types.SIGNUP_ERROR, e);
  }
};
