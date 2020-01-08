import React from "react";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect, FirebaseReducer } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { ProjectObjects } from "../../store/project";
import { ReducerState } from "ReduxTypes";

interface StateProps {
  projects: ProjectObjects.ProjectInbound[];
  auth: FirebaseReducer.AuthState;
}

const Dashboard: React.FunctionComponent<StateProps> = ({ projects, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: ReducerState): StateProps => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
