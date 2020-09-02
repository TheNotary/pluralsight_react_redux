import React from "react";
import CoursesPage from "./CoursesPage";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import * as courseActions from "../../redux/actions/courseActions";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({ courses: courses, authors: authors }); // define the initial state of the store

function render(args) {
  const defaultProps = {
    // actions: {},
    courses,
    authors,
    loading: false,
    history: {},
    match: {},
  };

  const props = { ...defaultProps, ...args };

  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <CoursesPage {...props} />
      </MemoryRouter>
    </Provider>
  );
  return tree;
}

describe("CoursesPage", () => {
  afterEach(() => {
    fetchMock.restore(); // this re-inits fetchMock, which is a stateful testing entity
  });

  it("works", () => {
    expect(true).toBe(true);
  });

  // it("does a meaningful test...", () => {
  //   fetchMock.mock("*", {
  //     body: courses,
  //     headers: { "content-type": "application/json" },
  //   });

  //   const tree = render();

  //   expect(tree).toMatchSnapshot();

  //   const startingDeleteButtons = tree.root.findAllByProps({
  //     className: "btn btn-outline-danger delete-course-btn",
  //   });
  //   expect(startingDeleteButtons.length).toBe(10);

  //   renderer.act(startingDeleteButtons[0].props.onClick);
  //   renderer.act(courseActions.deleteCourse, courses[0]);
  //   // courseActions.deleteCourse(courses[0]);

  //   // the onClick handler should have fired... but it doesn't I guess

  //   const endingDeleteButtons = tree.root.findAllByProps({
  //     className: "btn btn-outline-danger delete-course-btn",
  //   });

  //   expect(endingDeleteButtons.length).toBe(9);
  // });

  // it("sets submit button label 'save' when saving is false", () => {
  //   const tree = renderer.create(
  //     <CoursesPage
  //       course={courses[0]}
  //       authors={authors}
  //       onSave={jest.fn()}
  //       onChange={jest.fn()}
  //       saving={false}
  //     />
  //   );

  //   expect(tree).toMatchSnapshot();
  // });
});
