import * as React from "react";
import Main from "./pages/Main";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { thunkLogin } from "./store/session/thunks";
import { AppProps } from "./AppTypes";
import { AppState } from "./store";

class App extends React.Component<AppProps> {
  render() {
    return (
      <Router>
        <Main {...this.props} />
      </Router>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  session: state.session
});
export default connect(
  mapStateToProps,
  { thunkLogin }
)(App);
