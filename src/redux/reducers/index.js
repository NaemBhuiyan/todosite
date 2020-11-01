import { combineReducers } from "redux";
import postReducer from "./postreducer";
import catagoriesReducer from "./catagoriesReducer";

export default combineReducers({
  postReducer,
  catagoriesReducer,
});
