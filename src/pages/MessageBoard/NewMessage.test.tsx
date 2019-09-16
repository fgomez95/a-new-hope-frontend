import React from "react";
import NewMessage from "./NewMessage";
import "../../test/setup";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";

const wrapper = mount(
  <Router>
    <NewMessage />
  </Router>
);

describe("NewMessageBoard", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(NewMessage)).toHaveLength(1);
  });
});
