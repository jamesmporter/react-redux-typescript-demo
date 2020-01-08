import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { ProfileInbound } from "../../store/objects/profileObjects";
import { ReducerState } from "ReduxTypes";
import { FirebaseReducer } from "react-redux-firebase";

interface StateProps {
  auth: FirebaseReducer.AuthState;
  profile: ProfileInbound | null;
}

const Navbar: React.FunctionComponent<StateProps> = ({ auth, profile }) => {
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state: ReducerState): StateProps => {
  const profile = state.firebase.profile;
  return {
    auth: state.firebase.auth,
    profile: profile.isLoaded ? profile : null
  };
};

export default connect(mapStateToProps)(Navbar);
