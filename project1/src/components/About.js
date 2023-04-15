import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon6 from "../assets/icon6.png";
import icon3 from "../assets/icon3.png";
import "../styles/About.css";
function About() {
  return (
    <div className="icon_taskbar">
      <p className="icon01">
        {" "}
        Invoice2go <img src={icon1} />
      </p>
      <p className="icon02">
        {" "}
        Tribal <img src={icon2} />
      </p>
      <p className="icon03">
        {" "}
        <img src={icon3} />
      </p>
      <p className="icon04">
        {" "}
        <strong>Verox</strong>Floor
      </p>
      <p className="icon05"> REPUBLICA</p>
      <p className="icon06">
        {" "}
        Amplititude <img src={icon6} />
      </p>
    </div>
  );
}

export default About;
