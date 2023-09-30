import React from "react";
import logo from "../assets/whitelogo.png";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        <h3>Menu</h3>
        <Link to="/">Home</Link>
        <Link to="/">Converter</Link>
        <Link to="/">How it works</Link>
      </div>
      <div>
        <h3>About Us</h3>
        <Link to="/">About Us</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Privacy & Policy</Link>
      </div>
      <div>
        <h3>Record Screen</h3>
        <Link to="/">Browser Window</Link>
        <Link to="/">Desktop</Link>
        <Link to="/">Application</Link>
      </div>
    </footer>
  );
};

export default Footer;
