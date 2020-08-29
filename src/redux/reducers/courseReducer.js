import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// The state of our courses reducer is going to be an array of courses :)
export default function coursesReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
