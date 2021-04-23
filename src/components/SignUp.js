import React, { Component } from "react";
import axios from "axios";

class CreateProfile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      email: "",
      age: "",
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

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangeAge = (e) => {
    this.setState({ age: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      age: this.state.age,
    };

    axios
      .post("http://localhost:5001/api/signup", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        this.setState({
          first_name: "",
          last_name: "",
          username: "",
          password: "",
          email: "",
          age: "",
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
        <form onSubmit={this.onSubmit}>

          <label>
            First name:
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.onChangeFirstName}
            />
          </label>
          <br/>
          <label>
            Last name:
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.onChangeLastName}
            />
          </label>
          <br/>
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.onChangeUserName}
            />
          </label>
          <br/>
          <label>
            Password:
            <input
              type="text"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </label>
          <br/>
          <label>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </label>
          <br/>
          <label>
            Age:
            <input
              type="text"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateProfile;
