/* eslint-disable */
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../redux/reducers/countReducer";
// import { rootReducer as reducer } from "../../redux/reducers";
import defaultInitialState from "../../redux/reducers/initialState";
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  waitFor,
} from "@testing-library/dom";

function render(
  ui,
  {
    initialState = defaultInitialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// export { fireEvent } from "@testing-library/react";

// override render method
export { render };
