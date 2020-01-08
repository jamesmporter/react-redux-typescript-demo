import { NewProject } from "./objects";
import { action } from "typesafe-actions";
import { Types } from "./types";

export const createProject = {
  request: (project: NewProject) => {
    return action(Types.CREATE_PROJECT_REQUEST, project);
  },
  success: () => {
    return action(Types.CREATE_PROJECT_SUCCESS);
  },
  error: (e: Error) => {
    return action(Types.CREATE_PROJECT_ERROR, e);
  }
};