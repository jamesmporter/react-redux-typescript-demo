import React from "react";
import { connect } from "react-redux";
import { firestoreConnect, FirebaseReducer } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { ProjectInbound } from "../../store/objects/projectObjects";
import { ReducerState } from "ReduxTypes";
import { RouteComponentProps } from "react-router-dom";

interface RouteParams {
  id: string;
}

interface OwnProps extends RouteComponentProps<RouteParams> {}

interface Props {
  project: ProjectInbound;
  auth: FirebaseReducer.AuthState;
}

const ProjectDetails: React.FunctionComponent<Props & OwnProps> = ({
  project,
  auth
}) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>s
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state: ReducerState, ownProps: OwnProps): Props => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(ProjectDetails);
