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
            password: ""
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
           <label>
              Email/Username: <br/>
              <input
                type="text"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </label>
            <br/>
            <label>
              Password:<br/>
              <input
                type="password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </label>
            <br/>        
          </form><br/>
          <input className="loginbtn2" type="submit" value="Log In" />
        </div>
      );
    }
  }
  
  export default LogIn;