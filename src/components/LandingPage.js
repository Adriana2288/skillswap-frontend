import axios from "axios";
import React, { Component } from "react";
import logo from '../images/Logo.png';
import "../assets/css/landing-css.css";

class Landing extends Component {
  render() {
    return(
      <div>
    <div>
      <h1 className="landing-title"> Skill Swap With Others</h1>
      <h2 className="landing-paragraph"> Exchange your time with others to learn new skills.</h2>
    </div>

    <div>
      <button
        className="btn-signup"
        // style={buttonStyle}
        onClick={this.props.handleClick}> Begin Swapping
      </button>
    </div> 


    <div>
        <img src={logo} className="handShake"/>
    </div>

</div>
    )
  }
}

export default Landing;
