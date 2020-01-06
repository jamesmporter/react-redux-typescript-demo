export const signIn = credentials => {
  return {
    type: "LOGIN_REQUEST",
    payload: credentials
  };
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
