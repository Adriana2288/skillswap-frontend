import React, { Component } from "react"; 
import axios from "axios";
import "../assets/css/about-css.css";
import meeting from "../images/Meeting.png";

class AboutUs extends Component {
  render() {
    return (
      <>
    <div>
      <h1 className="aboutUs">About SkillSwap</h1>
    </div>
    <div>
      <p className="skillswapDescription">SkillSwap enables its users to match one another 
based on a specific set of skills they want to learn.<br /><br />

Our algorithm will match 2 profiles based on their skills & interests 
& provides the opportunity to trade your time with others.<br /><br />

Curious about playing the piano? Perhaps you could exchange
an hour with someone in exchange for teaching them one of
your skills!</p>
    </div>

    <div>
        <img src={meeting} className="picture"/>
    </div>

    </>
    )
  }
}

export default AboutUs;
