// TODO: once the book is done, refactor to separate components

import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App, { Search, Button, Table } from "./App";

Enzyme.configure({ adapter: new Adapter() });

// ---------------------------------------------------
// App tests
// ---------------------------------------------------
describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// ---------------------------------------------------
// Search tests
// ---------------------------------------------------
describe("Search", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search>Search</Search>, div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Search>Search</Search>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// ---------------------------------------------------
// Button tests
// ---------------------------------------------------
describe("Button", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button>Give me more</Button>, div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Button>Give me more</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// ---------------------------------------------------
// Table tests
// ---------------------------------------------------
describe("Table", () => {
  const props = {
    list: [
      { title: "1", author: "1", num_comments: 1, points: 2, objectID: "y" },
      { title: "2", author: "2", num_comments: 1, points: 2, objectID: "z" }
    ]
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Table {...props} />, div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Table {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows two items in list", () => {
    // Note: shallow renders the component without its child components.
    // Testing rules:
    // • Always begin with a shallow test
    // • If componentDidMount() or componentDidUpdate() should be tested, use mount()
    // • If you want to test component lifecycle and children behavior, use mount()
    // • If you want to test a component’s children rendering with less overhead than mount() and you are not interested in lifecycle methods, use render()
    const element = shallow(<Table {...props} />);

    expect(element.find(".table-row").length).toBe(2);
  });
});
