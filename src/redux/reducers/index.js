import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";
import count from "./countReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  apiCallsInProgress: apiCallsInProgress,
  count: count,
});

export default rootReducer;
