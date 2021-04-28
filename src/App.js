import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import About from "./components/AboutUs";
import Landing from "./components/LandingPage";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/api/signup" component={SignUp} />
          <Route path="/api/login" component={LogIn} />
          <Route path="/aboutus" component={About} />
          <Route path="/LandingPage" component={Landing} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
