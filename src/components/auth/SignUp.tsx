import React, { useState, Dispatch } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { ReducerState, AnyAction } from "ReduxTypes";
import { SignUpCredentials } from "../../store/objects/authObjects";
import { FirebaseReducer } from "react-redux-firebase";

interface StateProps {
  auth: FirebaseReducer.AuthState;
  authError: string | null;
}

interface DispatchProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    credentials: SignUpCredentials
  ) => void;
}

const SignUp: React.FunctionComponent<StateProps & DispatchProps> = ({
  auth,
  authError,
  handleSubmit
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <form
        className="white"
        onSubmit={e =>
          handleSubmit(
            e,
            new SignUpCredentials(email, password, firstName, lastName)
          )
        }
      >
        <h5 className="grey-text text-darken-3">Sign Up</h5>
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
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
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
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
  return {
    handleSubmit: (
      e: React.FormEvent<HTMLFormElement>,
      credentials: SignUpCredentials
    ) => {
      e.preventDefault();
      dispatch(signUp.request(credentials));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
