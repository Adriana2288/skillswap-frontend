import React, { Component } from "react";
import axios from "axios";

class CreateProfile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      age: "",
    };
  }

  onChangeName = (e) => {
    this.setState({ username: e.target.value });
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
      username: this.state.username,
      email: this.state.email,
      age: this.state.age,
    };

    axios
      .post("http://localhost:5001/api/profile", JSON.stringify(data), {
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
            Name:
            <input
              type="text"
              value={this.state.username}
              onChange={this.onChangeName}
            />
          </label>

          <label>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </label>

          <label>
            Age:
            <input
              type="text"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateProfile;
