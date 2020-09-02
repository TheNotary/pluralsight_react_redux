// __tests__/fetch.test.js
import React from "react";
import { courses, authors } from "../../../tools/mockData";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CoursesPage from "./CoursesPage";

const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

describe("CoursesPage", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("loads and displays greeting", async () => {
    fetchMock.mock("*", {
      body: courses,
      headers: { "content-type": "application/json" },
    });

    const props = {
      // actions: {},
      courses,
      authors,
      loading: false,
      history: {},
      match: {},
    };

    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    const store = mockStore({ courses: courses, authors: authors }); // define the initial state of the store

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CoursesPage {...props} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText("Delete").length).toBe(10);
    fireEvent.click(screen.getAllByText("Delete")[0]);

    // await waitFor(() => screen.getByText("Course deleted"));
    // screen.debug();
    expect(screen.getAllByText("Delete").length).toBe(9); // Fails: Expected 9, but Received 10

    // expect(screen.getByRole("heading")).toHaveTextContent("hello there");
    // expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });
});
