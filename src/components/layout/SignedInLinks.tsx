import React, { Dispatch } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { authActions } from "../../store/auth";
import { AnyAction } from "ReduxTypes";
import { ProfileObjects } from "../../store/profile";

interface OwnProps {
  profile: ProfileObjects.ProfileInbound | null;
}

interface DispatchProps {
  signOut: () => void;
}

const SignedInLinks: React.FunctionComponent<DispatchProps & OwnProps> = ({
  signOut,
  profile
}) => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <a onClick={signOut}>Log Out</a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            {profile != null ? profile.initials : ""}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
  return {
    signOut: () => dispatch(authActions.signOut.request())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
