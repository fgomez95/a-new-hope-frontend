import React from "react";

interface NewMessageProps {}
interface NewMessageState {}

class NewMessage extends React.Component<NewMessageProps, NewMessageState> {
  render() {
    return (
      <div>
        <h2>New Secret Message</h2>
      </div>
    );
  }
}

export default NewMessage;
