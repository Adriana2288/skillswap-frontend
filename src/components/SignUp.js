import React, { Component } from "react";
import axios from "axios";
import "../assets/css/signup.css";
import logo from "../images/Logo.png";
import { withRouter } from 'react-router-dom';

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



  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      age: this.state.age,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:3000/api/user/signup", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res)
        this.setState({
          first_name: "",
          last_name: "",
          username: "",
          age: "",
          email: "",
          password: "",
        
        });
        console.log(res.data.user)
        this.props.history.push({
          pathname: '/profile',
          search: '?query=userId',
          state: { userId: res.data.user} 
        })
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
                First name:
                <input
                  type="text"
                  value={this.state.first_name}
                  onChange={this.onChangeFirstName}
                />
              </label>
              <br />
              <label>
                Last name:
                <input
                  type="text"
                  value={this.state.last_name}
                  onChange={this.onChangeLastName}
                />
              </label>
              <br />
              <label>
                Username:
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.onChangeUserName}
                />
              </label>
              <br />
              <label>
                Age:
                <input
                  type="text"
                  value={this.state.age}
                  onChange={this.onChangeAge}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </label>
              <br />

              
            
              <input type="submit" value="Submit"/>
            


            </form>
          </div>
          <img className="logo" src={logo} alt="logo" />
        </main>
      </div>
    );
  }
}

export default withRouter(Registration);