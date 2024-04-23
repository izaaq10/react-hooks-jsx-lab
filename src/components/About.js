import React from "react";
import { image } from "../data/data";

function About() {
  return <div>
    <div id = "about">
      <h2>About Me</h2>
      <p>Glad to meet you</p>
      <img src = {image}  alt ="I made this"/>
    </div>
  </div>;
}

export default About;
