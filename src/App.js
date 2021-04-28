/*import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import About from "./components/AboutUs";
import Landing from "./components/LandingPage";
import "./App.css";
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
          <Route path="/api/aboutus" component={AboutUs} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
*/
// import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import AboutUs from "./components/AboutUs";
import Landing from "./components/LandingPage";
import React, { useRef, useEffect } from "react";
import {
  BrowserRouter,
  NavLink,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

function App() {
  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle("menu-collapse");
  };

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains("menu-collapse")) {
      navbarLinks.current.classList.add("menu-collapse");
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
          <div className="navbar-container">
            <a href="/Landing" className="brand-title">
              SkillSwap
            </a>
            <button
              onClick={(e) => {
                handleNavbarButton(e);
              }}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div ref={navbarLinks} className="navbar-links menu-collapse">
              <ul className="links-list">
                <li className="nav-item">
                  <NavLink
                    activeClassName="is-active"
                    exact={true}
                    className="nav-link"
                    to="/AboutUs"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="is-active"
                    exact={true}
                    className="nav-link"
                    to="/SignUp"
                  >
                    SignUp
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="is-active"
                    exact={true}
                    className="nav-link"
                    to="/LogIn"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <AllRoutes
            hideMenu={() => {
              hideNavMenu();
            }}
          ></AllRoutes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function AllRoutes({ hideMenu }) {
  let location = useLocation();
  useEffect(() => {
    hideMenu();
  }, [location]);

  return (
    <Switch>
      <Route path="/AboutUs" component={AboutUs}></Route>
      <Route path="/SignUp" component={SignUp}></Route>
      <Route path="/Profile" component={Profile}></Route>
      <Route path="/Landing" component={Landing}></Route>
      <Route path="/LogIn" component={LogIn}></Route>
    </Switch>
  );
}

export default App;
