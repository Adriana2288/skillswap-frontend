import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
<<<<<<< HEAD
import LogIn from "./components/LogIn"
=======
import About from "./components/AboutUs";
import Landing from "./components/LandingPage";
>>>>>>> ecd476505c17768269aaa51ae99fbfe641e5e0fe

class App extends Component {
  render() {
    return (
      <Router>
        <div>
<<<<<<< HEAD
          <Route path="/api/signup" component={SignUp} />
          <Route path="/api/login" component={LogIn} />
=======
          <Route path="/signup" component={SignUp} />
          <Route path="/aboutus" component={About} />
          <Route path="/LandingPage" component={Landing} />
>>>>>>> ecd476505c17768269aaa51ae99fbfe641e5e0fe
        </div>
      </Router>
    );
  }
}

export default App;
