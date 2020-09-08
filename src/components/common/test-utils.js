/* eslint-disable */
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import defaultInitialState from "../../redux/reducers/initialState";

function render(
  ui,
  { initialState = defaultInitialState, reducer, ...renderOptions } = {}
) {
  const store = createStore(reducer, initialState);

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
