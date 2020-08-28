import * as types from "../actions/actionTypes";

// The state of our courses reducer is going to be an array of courses :)
export default function coursesReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
