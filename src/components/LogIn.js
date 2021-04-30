import React, { Component } from "react";
import axios from "axios";
import "../assets/css/login.css";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:3000/api/user/login", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        this.setState({
          email: "",
          password: "",
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <form className="login_interface" onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <label>
            <input
              type="text"
              name=""
              placeholder="Email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              name=""
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </label>
          <br />
          <input className="loginbtn2" type="submit" name="" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LogIn;
