import initialState from "./initialState";

export default function countReducer(state = initialState.count, action) {
  switch (action.type) {
    case "INCREMENT": {
      const newState = { ...state, count: state.count + 1 };
      return newState;
      // return [...state, { count: state.count + 1 }];
      // return state + 1;
    }
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    // return state - 1;
    default:
      return state;
  }
}
