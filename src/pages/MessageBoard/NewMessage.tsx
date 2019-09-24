import React from "react";
import MessageForm from "../../components/MessageBoard/MessageForm";

export interface NewMessageProps {}
export interface NewMessageState {
  username: string;
  message: string;
}

class NewMessage extends React.Component<NewMessageProps, NewMessageState> {
  state: NewMessageState = {
    username: "",
    message: ""
  };
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = event.target;
    this.setState({
      [name]: value
    } as Pick<NewMessageState, keyof NewMessageState>);
  };
  render() {
    return (
      <div>
        <h2>New Secret Message</h2>
        <MessageForm
          username={this.state.username}
          message={this.state.message}
          handleChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NewMessage;
