import React, { Component } from "react";
import axios from "axios";
import "../assets/css/signup.css";
import card from "../images/Namecard.png";


class Registration extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      age: "",
      email: "",
      password: "",
      repeat_password: "",
    };
  }
  onChangeFirstName = (e) => {
    this.setState({ first_name: e.target.value });
  };

  onChangeLastName = (e) => {
    this.setState({ last_name: e.target.value });
  };

  onChangeUserName = (e) => {
    this.setState({ username: e.target.value });
  };

  onChangeAge = (e) => {
    this.setState({ age: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onChangeRepeatPassword = (e) => {
    this.setState({ repeat_password: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      age: this.state.age,
      email: this.state.email,
      password: this.state.password,
      repeat_password: this.state.repeat_password,
    };

    axios
      .post("http://localhost:3000/signup", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        this.setState({
          first_name: "",
          last_name: "",
          username: "",
          age: "",
          email: "",
          password: "",
          repeat_password: "",
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="wrapper">
        <section className="signup_navbar"></section>

        <h2 className="createAcc"> Create an Account</h2>
        <main className="signup_main">
          <div className="container">
            <form className="login_form" onSubmit={this.onSubmit}>
              <label>
                First name: <br />
                <input
                  type="text"
                  value={this.state.first_name}
                  onChange={this.onChangeFirstName}
                />
              </label>
              <br />
              <label>
                Last name: <br />
                <input
                  type="text"
                  value={this.state.last_name}
                  onChange={this.onChangeLastName}
                />
              </label>
              <br />
              <label>
                Username: <br />
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.onChangeUserName}
                />
              </label>
              <br />
              <label>
                Age:  <br />
                <input
                  type="text"
                  value={this.state.age}
                  onChange={this.onChangeAge}
                />
              </label>
              <br />
              <label>
                Email: <br />
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </label>
              <br />
              <label>
                Password: <br />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </label>
              <br />
              <label>
                Please verify your password: <br />
                <input
                  type="password"
                  value={this.state.repeat_password}
                  onChange={this.onChangeRepeatPassword}
                />
              </label>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <img className="card" src={card} alt="logo" />
        </main>
      </div>
    );
  }
}

export default Registration;
