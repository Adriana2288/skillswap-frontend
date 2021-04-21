import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import CreateProfile from "./components/CreateProfile"


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route path="/profile" component={CreateProfile}/>
        </div>
      </Router>
    )
  }
}

export default App;
