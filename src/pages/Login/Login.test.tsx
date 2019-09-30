import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount, ReactWrapper } from "enzyme";
import Login from "./Login";
import "../../test/setup";
import { Event } from "../../modules/shared_interfaces";

const usernameEvent: Event = {
  target: {
    name: "username",
    value: "john"
  }
};

const passwordEvent: Event = {
  target: {
    name: "password",
    value: "secret"
  }
};

const mockAsyncLogin = jest.fn();

const wrapper: ReactWrapper = mount(
  <Router>
    <Login asyncLogin={mockAsyncLogin} />
  </Router>
);

describe("Login", () => {
  it("can be mounted", () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  it("sould update the username state on input change", () => {
    const input: ReactWrapper = wrapper.find(".form-username");
    const testResult: string = usernameEvent.target.value;
    input.simulate("change", usernameEvent);
    expect(wrapper.find(Login).state().username).toEqual(testResult);
  });
  it("should update the password state on input change", () => {
    const input: ReactWrapper = wrapper.find(".form-password");
    const testResult: string = passwordEvent.target.value;
    input.simulate("change", passwordEvent);
    expect(wrapper.find(Login).state().password).toEqual(testResult);
  });
  it("should call async login on form submit", () => {
    const input: ReactWrapper = wrapper.find("form");
    input.simulate("submit");
    expect(mockAsyncLogin.mock.calls).toHaveLength(1);
  });
});
