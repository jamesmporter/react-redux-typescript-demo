import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { authActions } from "../../store/auth";
import { Redirect } from "react-router-dom";
import { AuthObjects } from "../../store/auth";
import { ReducerState, AnyAction } from "ReduxTypes";
import { FirebaseReducer } from "react-redux-firebase";

interface StateProps {
  auth: FirebaseReducer.AuthState;
  authError: string | null;
}

interface DispatchProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    credentials: AuthObjects.LoginCredentials
  ) => void;
}

const SignIn: React.FunctionComponent<StateProps & DispatchProps> = ({
  auth,
  authError,
  handleSubmit
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <form
        className="white"
        onSubmit={e =>
          handleSubmit(e, new AuthObjects.LoginCredentials(email, password))
        }
      >
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
          <div className="center red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state: ReducerState): StateProps => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
  return {
    handleSubmit: (
      e: React.FormEvent<HTMLFormElement>,
      credentials: AuthObjects.LoginCredentials
    ) => {
      e.preventDefault();
      dispatch(authActions.signIn.request(credentials));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);