import React from "react";
import logo from "../assets/Vector.png";
import logo1 from "../assets/Vector (1).png";
import arrow_down from "../assets/arrow_down.png";
import Hamburger_website from "../assets/Hamburger_website.png";

import "../styles/Navbar.css";

function Navbar() {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <div className="navbar_main_container">
      <div className="phone_container">
        <div className="logo_container">
          <img src={logo} />
        </div>
      </div>
      <div className="logo_mini">
        <img src={logo1} />
      </div>
      <img
        onClick={() => {
          setShowNav(!showNav);
        }}
        className="hamburger"
        src={Hamburger_website}
      />

      <div className={"list_signup " + (showNav && "active")}>
        <div className="list_container">
          <p>Overview</p>
          <p>Home</p>
          <p>About</p>
          <p>Pricing</p>
          <p>Pages</p>
          <p className="arrow_down">
            <img src={arrow_down} />
          </p>
        </div>
        <div className="signup_container">
          <p className="login">Login</p>
          <p className="register">Register</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
