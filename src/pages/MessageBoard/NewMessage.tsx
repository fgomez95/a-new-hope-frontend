import React from "react";
import MessageForm from "../../components/MessageBoard/MessageForm";
interface NewMessageProps {}
interface NewMessageState {}

class NewMessage extends React.Component<NewMessageProps, NewMessageState> {
  render() {
    return (
      <div>
        <h2>New Secret Message</h2>
        <MessageForm />
      </div>
    );
  }
}

export default NewMessage;
