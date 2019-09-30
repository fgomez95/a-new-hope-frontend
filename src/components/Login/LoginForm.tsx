import * as React from "react";
import { LoginFormProps } from "./LoginTypes";

function LoginForm(props: LoginFormProps): JSX.Element {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <input
          type="text"
          name="username"
          className="form-username"
          value={props.username}
          onChange={props.handleInputChange}
        />
        <input
          type="password"
          name="password"
          className="form-password"
          value={props.password}
          onChange={props.handleInputChange}
        />
        <input type="submit" className="form-submit" />
      </form>
    </div>
  );
}

export default LoginForm;
