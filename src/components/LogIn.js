import React, { Component } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

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
            password: ""
          });
          this.props.history.push({
            pathname: '/userProfile',
            search: '?query=userId',
          });
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
              Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </label>
            <br/>
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </label>
            <br/>        
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }
  
  export default withRouter(LogIn);