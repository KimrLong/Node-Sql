import { combineReducers } from "redux";
import tutorials from "./tutorials";
import auth from "./auth";

export default combineReducers({
  tutorials,
  auth
});
