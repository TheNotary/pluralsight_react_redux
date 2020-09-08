// https://testing-library.com/docs/example-react-redux
import React from "react";
import { render, fireEvent } from "./test-utils"; // We're using our own custom render function and not RTL's render our custom utils also re-export everything from RTL so we can import fireEvent and screen here as well
import "@testing-library/jest-dom/extend-expect";

import Counter from "./Counter";
import reducer from "../../redux/reducers/countReducer";

// What does this test?  The redux cycle!
// - The inital rendered outputs of the component meet expectations
// - The "+" button is wired up to fire off the expected redux action
// - The action performs the correct reducer logic to alter the redux store
// - The components re-renders itself with the correct data given the change to the store
test("renders using redux with defaults and increment the count", () => {
  const { getByText, getByTestId } = render(<Counter />, { reducer });

  expect(getByTestId("count-value")).toHaveTextContent("0");

  fireEvent.click(getByText("+"));

  expect(getByTestId("count-value")).toHaveTextContent("1");
});

test("it renders using redux with a custom initial state and decrement the count", () => {
  const bigObj = render(<Counter />, {
    initialState: { count: 300 },
    reducer: reducer,
  });
  const getByTestId = bigObj.getByTestId;
  const getByText = bigObj.getByText;

  fireEvent.click(getByText("-"));

  expect(getByTestId("count-value")).toHaveTextContent("299");
});

test("custom reducer", () => {
  const { getByText, getByTestId } = render(<Counter />, {
    reducer: reducer,
  });

  fireEvent.click(getByText("+"));

  expect(getByTestId("count-value")).toHaveTextContent("1");
});
