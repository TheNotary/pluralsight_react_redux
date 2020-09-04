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
  // count: (state = 0, action) => {
  //   if (action.type === "INCREMENT") return state + 1;
  //   if (action.type === "DECREMENT") return state - 1;
  //   return state;
  // },
});

export default rootReducer;
