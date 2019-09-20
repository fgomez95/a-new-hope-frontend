import React from "react";
import MessageForm from "./MessageForm";
import "../../test/setup";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";

const wrapper = mount(
  <Router>
    <MessageForm />
  </Router>
);

describe("Form", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(MessageForm)).toHaveLength(1);
  });
  it("should render a form element", () => {
    const form = wrapper.find("form");
    expect(form).toHaveLength(1);
  });
  it("should have a username input", () => {
    const input = wrapper.find("input#username");
    const placeholder = "username";
    expect(input).toHaveLength(1);
    expect(input.prop("placeholder")).toEqual(placeholder);
  });
  it("should have a message textarea", () => {
    const textarea = wrapper.find("textarea#message");
    const placeholder = "message";
    expect(textarea).toHaveLength(1);
    expect(textarea.prop("placeholder")).toEqual(placeholder);
  });
  it("should have a submit input", () => {
    const input = wrapper.find("input#submit");
    expect(input).toHaveLength(1);
  });
});
