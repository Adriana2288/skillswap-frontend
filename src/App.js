import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import LandingPage from "./components/LandingPage";
// import "./assets/css/style.css"
// import "./assets/css/landing-css.css" ??do these need to be here


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/api/signup" component={SignUp} />
          <Route path="/api/login" component={LogIn} />
          <Route path="/api/landingpage" component={LandingPage} />
        </div>
      </Router>
    );
  }
}

export default App;
