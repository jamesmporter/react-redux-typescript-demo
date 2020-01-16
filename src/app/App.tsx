import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { ReducerState, AnyAction } from "ReduxTypes";
import { updateName, clearName } from "./actions";

interface OwnProps {
  job: string;
}

interface StateProps {
  initialName: string;
}

interface DispatchProps {
  updateName: (name: string) => void;
  clearName: () => void;
}

const App: React.FunctionComponent<StateProps & DispatchProps & OwnProps> = ({
  initialName,
  updateName,
  clearName,
  job
}) => {
  const [name, setName] = useState("");

  return (
    <div className="page">
      <p>Welcome to this React/Redux/TypeScript demo app.</p>
      <p>Your name (in the Redux store) is: {initialName}</p>
      <p>Your job (passed as a prop) is: {job}</p>

      <input
        type="text"
        placeholder="Enter a new name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="button"
        onClick={e => updateName(name)}
        value="Update Name"
      />
      <input type="button" onClick={e => clearName()} value="Clear Name" />
    </div>
  );
};

const mapStateToProps = (
  state: ReducerState,
  ownProps: OwnProps
): StateProps => {
  return {
    initialName: state
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  ownProps: OwnProps
): DispatchProps => {
  return {
    updateName: (name: string) => dispatch(updateName(name)),
    clearName: () => dispatch(clearName())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
