import { action } from "typesafe-actions";
import Types from "./types";

export const updateName = (name: String) => action(Types.UPDATE_NAME, name);

export const clearName = () => action(Types.CLEAR_NAME);
