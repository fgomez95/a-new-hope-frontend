import React from "react";
import NewMessage from "./NewMessage";
import MessageForm from "../../components/MessageBoard/MessageForm";
import "../../test/setup";
import { BrowserRouter as Router } from "react-router-dom";
import { mount, ReactWrapper } from "enzyme";
import { NewMessageState } from "./MessageBoardTypes";
import { Event } from "../../modules/shared_interfaces";

const usernameEvent: Event = {
  target: {
    value: "jdoe@mail.com",
    name: "username"
  }
};

const messageEvent: Event = {
  target: {
    value: "hello, world",
    name: "message"
  }
};

describe("NewMessageBoard", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(
      <Router>
        <NewMessage />
      </Router>
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it("renders without crashing", () => {
    expect(wrapper.find(NewMessage)).toHaveLength(1);
  });
  it("renders a new message form", () => {
    expect(wrapper.find(MessageForm)).toHaveLength(1);
  });
  it("should update the username state when the username input changes", () => {
    const usernameInput: ReactWrapper = wrapper.find("#username");
    const newMessage: ReactWrapper<{}, NewMessageState> = wrapper.find(
      NewMessage
    );
    const testResult: string = usernameEvent.target.value;
    usernameInput.simulate("change", usernameEvent);
    expect(newMessage.state().username).toEqual(testResult);
  });
  it("should update the message state when the message input changes", () => {
    const messageInput: ReactWrapper = wrapper.find("#message");
    const newMessage: ReactWrapper<{}, NewMessageState> = wrapper.find(
      NewMessage
    );
    const testResult: string = messageEvent.target.value;
    messageInput.simulate("change", messageEvent);
    expect(newMessage.state().message).toEqual(testResult);
  });
  it("should reset the wrapper values before each test", () => {
    const newMessageState: NewMessageState = wrapper.find(NewMessage).state();
    const {
      username,
      message
    }: { username: string; message: string } = newMessageState;
    expect(username).toEqual("");
    expect(message).toEqual("");
  });
});
