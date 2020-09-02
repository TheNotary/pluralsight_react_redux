import React from "react";
import { mount } from "enzyme";
import { courses } from "../../../tools/mockData";
import CourseList from "./CourseList";
import { MemoryRouter } from "react-router-dom";

function render(args) {
  const defaultProps = {
    courses,
    onDeleteClick: jest.fn(),
    history: {},
    match: {},
  };

  const props = { ...defaultProps, ...args };
  return mount(
    <MemoryRouter>
      <CourseList {...props} />
    </MemoryRouter>
  );
}

it("it's all good when there are no courses", () => {
  const wrapper = render({ courses: [] });
  const courseElements = wrapper.find(".course");

  expect(courseElements.length).toBe(0);
});

it("it's all good when there's a couple courses", () => {
  const wrapper = render();
  const courseElements = wrapper.find(".course");

  expect(courseElements.length).toBe(10);
});

it("redraws the courses list with an additional course when a new course is added to the store", () => {
  const onDeleteClick = jest.fn();
  const wrapper = render({ onDeleteClick: onDeleteClick });
  const initialCourseElements = wrapper.find(".course");
  expect(initialCourseElements.length).toBe(10);

  // Delete a course
  const deleteButton = wrapper.find(".delete-course-btn").first();
  deleteButton.simulate("click");

  expect(onDeleteClick).toHaveBeenCalledTimes(1);
  // Assert that we have 1 less course in the UI...
  // const finalCourseElements = wrapper.find(".course");
  // expect(finalCourseElements.length).toBe(9);
});

// it("redraws the courses list with an additional course when a new course is added to the store", () => {
//   const wrapper = render();
//   const initialCourseElements = wrapper.find(".course");
//   expect(initialCourseElements.length).toBe(10);

//   // wrapper.setProps({ courses: [] });
//   wrapper.instance().setState({ courses: [] });
//   wrapper.setState({ courses: [] });
//   wrapper.instance().forceUpdate();
//   wrapper.update();
//   wrapper.render();
//   const finalCourseElements = wrapper.find(".course");
//   expect(finalCourseElements.length).toBe(0);
// });

// it("sets error when attempting to save an empty title field", () => {
//   const wrapper = render();
//   wrapper.find("form").simulate("submit");
//   const error = wrapper.find(".alert").first();
//   expect(error.text()).toBe("Title is required.");
// });

// Test the initial state of having no courses, then create a course, then test the end result of having the course show up?

// Broaden your scope from the useEffect function call to the actual outputs of the JSX rendering
