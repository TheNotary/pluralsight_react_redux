// The state of our courses reducer is going to be an array of courses :)
export default function coursesReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
