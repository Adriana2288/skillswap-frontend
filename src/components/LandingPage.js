import axios from "axios";
import React, { Component } from "react";
import logo from '../images/Logo.png';
import "../assets/css/landing-css.css";

class Landing extends Component {
  render() {
    return(
      <div>
    <div>
      <h1 className="createH1"> Create an Account </h1>
      <h2> Exchange your time with others to learn new skills.</h2>
    </div>

    <div>
      <button
        className="btn-signup"
        // style={buttonStyle}
        onClick={this.props.handleClick}> Begin Swapping
      </button>
    </div> 


    <div>
        <img src={logo} />
    </div>

</div>
    )
  }
}

export default Landing;
