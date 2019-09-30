import React from "react";
import MessageForm from "./MessageForm";
import "../../test/setup";
import { BrowserRouter as Router } from "react-router-dom";
import { mount, ReactWrapper } from "enzyme";
import { MessageFormProps } from "./MessageBoardTypes";

const messageFormPropsMock: MessageFormProps = {
  handleChange: jest.fn(),
  username: "",
  message: ""
};

const wrapper = mount(
  <Router>
    <MessageForm {...messageFormPropsMock} />
  </Router>
);

describe("Form", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(MessageForm)).toHaveLength(1);
  });
  it("should render a form element", () => {
    const form: ReactWrapper = wrapper.find("form");
    expect(form).toHaveLength(1);
  });
  it("should have a username input", () => {
    const input: ReactWrapper = wrapper.find("input#username");
    const placeholder: string = "username";
    expect(input).toHaveLength(1);
    expect(input.prop("placeholder")).toEqual(placeholder);
  });
  it("should have a message textarea", () => {
    const textarea: ReactWrapper = wrapper.find("textarea#message");
    const placeholder: string = "message";
    expect(textarea).toHaveLength(1);
    expect(textarea.prop("placeholder")).toEqual(placeholder);
  });
  it("should have a submit input", () => {
    const input: ReactWrapper = wrapper.find("input#submit");
    expect(input).toHaveLength(1);
  });
  it("should call handle change when input change on username or message", () => {
    const input: ReactWrapper = wrapper.find("input#username");
    const textarea: ReactWrapper = wrapper.find("textarea#message");
    const mockSpy: jest.SpyInstance = jest.spyOn(
      messageFormPropsMock,
      "handleChange"
    );
    input.simulate("change");
    textarea.simulate("change");
    expect(mockSpy.mock.calls).toHaveLength(2);
  });
});
