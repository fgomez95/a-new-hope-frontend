import React from "react";
import { MessageFormProps } from "./MessageBoardTypes";

const messageForm = (props: MessageFormProps) => (
  <form>
    <input
      type="text"
      id="username"
      placeholder="username"
      name="username"
      value={props.username}
      onChange={props.handleChange}
    />
    <textarea
      id="message"
      placeholder="message"
      name="message"
      value={props.message}
      onChange={props.handleChange}
    />
    <input type="submit" id="submit" />
  </form>
);

export default messageForm;
