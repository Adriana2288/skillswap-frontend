import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn"
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/profile" component={Profile}/>
        </div>
      </Router>
    );
  }
}

export default App;
