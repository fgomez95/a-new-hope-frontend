import React from "react";
import NewMessage from "./NewMessage";
import "../../test/setup";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import MessageForm from "../../components/MessageBoard/MessageForm";

const wrapper = mount(
  <Router>
    <NewMessage />
  </Router>
);

describe("NewMessageBoard", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(NewMessage)).toHaveLength(1);
  });
  it("renders a new message form", () => {
    expect(wrapper.find(MessageForm)).toHaveLength(1);
  });
  it("should update the username state when the username input changes", () => {
    const usernameInput = wrapper.find("#username");
    const newMessage = wrapper.find(NewMessage);
    const usernameExample = "example123";
    usernameInput.simulate("change", {
      target: {
        value: usernameExample,
        name: "username"
      }
    });
    expect(newMessage.state().username).toEqual(usernameExample);
  });
  it("should update the message state when the message input changes", () => {
    const messageInput = wrapper.find("#message");
    const newMessage = wrapper.find(NewMessage);
    const messageExample = "hello, world";
    messageInput.simulate("change", {
      target: {
        value: messageExample,
        name: "message"
      }
    });
    expect(newMessage.state().message).toEqual(messageExample);
  });
});
