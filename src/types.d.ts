declare module "ReduxTypes" {
  import { StateType, ActionType } from "typesafe-actions";
  export type ReducerState = StateType<
    typeof import("./store/rootReducer").default
  >;
  export type AnyAction = ActionType<
    | typeof import("./store/auth/actions")
    | typeof import("./store/project/actions")
  >;
}
