import React from "react";

interface MessageFormProps {
  handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  username: string;
  message: string;
}

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
