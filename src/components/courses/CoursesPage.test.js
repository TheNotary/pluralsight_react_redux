import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { courses, authors } from "../../../tools/mockData";
import CoursesPage from "./CoursesPage";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

function render(args) {
  const defaultProps = {
    actions: {},
    courses,
    authors,
    loading: false,
    history: {},
    match: {},
  };

  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);

  const store = mockStore({ courses: [], authors: [] }); // define the initial state of the store
  const props = { ...defaultProps, ...args };
  return mount(
    <Provider store={store}>
      <MemoryRouter>
        <CoursesPage {...props} />
      </MemoryRouter>
    </Provider>
  );
}

describe("CoursesPage", () => {
  afterEach(() => {
    fetchMock.restore(); // this re-inits fetchMock, which is a stateful testing entity
  });

  it("works", () => {
    fetchMock.mock("*", {
      body: courses,
      headers: { "content-type": "application/json" },
    });

    render();
    expect(true).toBe(true);
  });

  // var window = { confirm: jest.fn() };

  // it("redraws the courses list with an additional course when a new course is added to the store", () => {
  //   fetchMock.mock("*", {
  //     body: courses,
  //     headers: { "content-type": "application/json" },
  //   });

  //   const wrapper = render();
  //   const initialCourseElements = wrapper.find(".course");
  //   expect(courses.length).toBe(10);
  //   expect(initialCourseElements.length).toBe(10);

  //   // Delete a course
  //   const deleteButton = wrapper.find(".delete-course-btn").first();
  //   deleteButton.simulate("click");

  //   // Assert that we have 1 less course in the UI
  //   const finalCourseElements = wrapper.find(".course");
  //   expect(finalCourseElements.length).toBe(9);
  // });
});
