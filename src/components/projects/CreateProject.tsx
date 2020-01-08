import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { projectActions } from "../../store/project";
import { Redirect } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import { ProjectObjects } from "../../store/project";
import { ReducerState, AnyAction } from "ReduxTypes";
import { FirebaseReducer } from "react-redux-firebase";

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  auth: FirebaseReducer.AuthState;
}

interface DispatchProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    newProject: ProjectObjects.NewProject
  ) => void;
}

const CreateProject: React.FunctionComponent<StateProps &
  DispatchProps &
  OwnProps> = ({ handleSubmit, auth }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <form
        className="white"
        onSubmit={e =>
          handleSubmit(e, new ProjectObjects.NewProject(title, content))
        }
      >
        <h5 className="grey-text text-darken-3">Create a New Project</h5>
        <div className="input-field">
          <input
            type="text"
            id="title"
            onChange={e => setTitle(e.target.value)}
          />
          <label htmlFor="title">Project Title</label>
        </div>
        <div className="input-field">
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={e => setContent(e.target.value)}
          ></textarea>
          <label htmlFor="content">Project Content</label>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (
  state: ReducerState,
  ownProps: OwnProps
): StateProps => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  ownProps: OwnProps
): DispatchProps => {
  return {
    handleSubmit: (
      e: React.FormEvent<HTMLFormElement>,
      newProject: ProjectObjects.NewProject
    ) => {
      e.preventDefault();
      dispatch(projectActions.createProject.request(newProject));
      ownProps.history.push("/");
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
