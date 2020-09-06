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

test("can render with redux with defaults", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("+"));
  debugger;
  expect(screen.getByTestId("count-value")).toHaveTextContent("1");
});

test("can render with redux with custom initial state", () => {
  render(<Counter />, {
    initialState: { count: 3 },
  });
  fireEvent.click(screen.getByText("-"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("2");
});

test("can render with redux with custom store", () => {
  // this is a silly store that can never be changed
  const store = createStore(() => ({ count: 1000 }));
  render(<Counter />, {
    store,
  });
  fireEvent.click(screen.getByText("+"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("1000");
  fireEvent.click(screen.getByText("-"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("1000");
});
