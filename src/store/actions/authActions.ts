import { LoginCredentials, SignUpCredentials } from "../objects/authObjects";
import { action } from "typesafe-actions";
import { Types } from "../types/authTypes";

export const signIn = {
  request: (credentials: LoginCredentials) => {
    return action(Types.LOGIN_REQUEST, credentials);
  },
  success: () => {
    return action(Types.LOGIN_SUCCESS);
  },
  error: (e: Error) => {
    return action(Types.LOGIN_ERROR);
  }
};

export const signOut = () => {
  return action(Types.SIGNOUT_REQUEST);
};

export const signOutSuccess = () => {
  return action(Types.SIGNOUT_SUCCESS);
};

export const signOutError = (e: Error) => {
  return action(Types.SIGNOUT_ERROR, e);
};

export const signUp = (credentials: SignUpCredentials) => {
  return action(Types.SIGNUP_REQUEST, credentials);
};

export const signUpSuccess = () => {
  return action(Types.SIGNUP_SUCCESS);
};

export const signUpError = (e: Error) => {
  return action(Types.SIGNUP_ERROR, e);
};
