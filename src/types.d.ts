declare module "ReduxTypes" {
  import { StateType, ActionType } from "typesafe-actions";
  export type ReducerState = StateType<
    typeof import("./store/reducers").default
  >;
  export type AnyAction = ActionType<
    | typeof import("./store/actions/authActions")
    | typeof import("./store/actions/projectActions")
  >;
}
