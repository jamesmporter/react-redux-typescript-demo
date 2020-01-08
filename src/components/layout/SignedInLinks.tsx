import React, { Dispatch } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { AnyAction } from "ReduxTypes";
import { ProfileInbound } from "../../store/objects/profileObjects";

interface OwnProps {
  profile: ProfileInbound | null;
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
    signOut: () => dispatch(signOut.request())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
