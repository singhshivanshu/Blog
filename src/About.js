import React, { Component } from "react";
import Skills from "./Skills";
import Info from "./Info"

class About extends Component {
  render() {
    return (
      <div>
        <Info/>
        <Skills />
      </div>
    );
  }
}

export default About;
