// https://testing-library.com/docs/example-react-redux
import React from "react";
import { createStore } from "redux";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render } from "./test-utils";
// import { fireEvent, screen } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./Counter";

import reducer from "../../redux/reducers/countReducer";

test("can render with redux with defaults", () => {
  const bigObj = render(<Counter />);
  const getByTestId = bigObj.getByTestId;
  const getByText = bigObj.getByText;

  expect(getByTestId("count-value")).toHaveTextContent("0");

  const leftClick = { button: 1 };
  fireEvent.click(getByText("+"), leftClick);

  expect(getByTestId("count-value")).toHaveTextContent("1");
});

test("can render with redux with custom initial state", () => {
  const { getByText, getByTestId } = render(<Counter />, {
    initialState: { count: 3 },
  });

  fireEvent.click(getByText("-"));

  expect(getByTestId("count-value")).toHaveTextContent("2");
});

test("can render with redux with custom store", () => {
  // this is a silly store that can never be changed
  const store = createStore(() => ({ count: 1000 }));
  const { getByTestId, getByText } = render(<Counter />, {
    store,
  });

  fireEvent.click(getByText("+"));

  expect(getByTestId("count-value")).toHaveTextContent("1000");
  fireEvent.click(getByText("-"));
  expect(getByTestId("count-value")).toHaveTextContent("1000");
});
