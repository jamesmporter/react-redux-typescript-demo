export const signIn = {
  request: credentials => {
    return {
      type: "LOGIN_REQUEST",
      payload: credentials
    };
  },
  success: () => {
    return {
      type: "LOGIN_SUCCESS"
    };
  },
  error: e => {
    return {
      type: "LOGIN_ERROR"
    };
  }
};

export const signOut = () => {
  return {
    type: "SIGNOUT_REQUEST"
  };
};

export const signUp = newUser => {
  return {
    type: "SIGNUP_REQUEST",
    payload: newUser
  };
};
