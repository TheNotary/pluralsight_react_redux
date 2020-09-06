/* eslint-disable */
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../redux/reducers/countReducer";
// import { rootReducer as reducer } from "../../redux/reducers";
import initialState1 from "../../redux/reducers/initialState";
import propTypes from "prop-types";

function render(
  ui,
  {
    initialState = initialState1,
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

// override render method
export { render };
