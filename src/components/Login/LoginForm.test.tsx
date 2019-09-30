import React from "react";
import Login from "./LoginForm";
import "../../test/setup";
import { BrowserRouter as Router } from "react-router-dom";
import { mount, ReactWrapper } from "enzyme";
import { LoginFormProps } from "./LoginTypes";
import { Event } from "../../modules/shared_interfaces";

const LoginPropsMock: LoginFormProps = {
  username: "john",
  password: "secret",
  handleInputChange: jest.fn(),
  handleFormSubmit: jest.fn()
};

const usernameEvent: Event = {
  target: {
    name: "username",
    value: "jdoe@email.com"
  }
};

const passwordEvent: Event = {
  target: {
    name: "password",
    value: "secret"
  }
};

const wrapper = mount(
  <Router>
    <Login {...LoginPropsMock} />
  </Router>
);

describe("LoginForm", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  it("renders username and password inputs", () => {
    expect(wrapper.find("input")).toHaveLength(3);
  });
  it("reners the value of the prop username", () => {
    expect(wrapper.find(".form-username").props().value).toEqual("john");
  });
  it("reners the value of the prop password", () => {
    expect(wrapper.find(".form-password").props().value).toEqual("secret");
  });
  it("calls handleInputChange when username input is changed", () => {
    const input: ReactWrapper = wrapper.find(".form-username");
    input.simulate("change", usernameEvent);
    const mockSpy: jest.SpyInstance = jest.spyOn(
      LoginPropsMock,
      "handleInputChange"
    );
    expect(mockSpy.mock.calls).toHaveLength(1);
  });
  it("calls handleInputChange when password input is changed", () => {
    const input: ReactWrapper = wrapper.find(".form-password");
    input.simulate("change", passwordEvent);
    const mockSpy: jest.SpyInstance = jest.spyOn(
      LoginPropsMock,
      "handleInputChange"
    );
    expect(mockSpy.mock.calls).toHaveLength(2);
  });
  it("calls handleFormSubmit when the form is submitted", () => {
    const input: ReactWrapper = wrapper.find("form");
    input.simulate("submit");
    const mockSpy: jest.SpyInstance = jest.spyOn(
      LoginPropsMock,
      "handleFormSubmit"
    );
    expect(mockSpy.mock.calls).toHaveLength(1);
  });
});
