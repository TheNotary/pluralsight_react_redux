import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// The state of our courses reducer is going to be an array of courses :)
export default function coursesReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map(course => course.id === action.course.id ? action.course : course);
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
