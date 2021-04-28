import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import LandingPage from "./components/LandingPage";
import "./App.css";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/api/signup" component={SignUp} />
          <Route path="/api/login" component={LogIn} />
          <Route path="/api/landingpage" component={LandingPage} />
          <Route path="/api/aboutus" component={AboutUs} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/profile" component={Profile}/>
        </div>
      </Router>
    );
  }
}

export default App;
