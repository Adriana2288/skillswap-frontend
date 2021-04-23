import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import About from "./components/AboutUs";
import Homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/signup" component={SignUp} />
          <Route path="/aboutus" component={About} />
          <Route path="/homepage" component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
