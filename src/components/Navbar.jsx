import React from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="logo">
        <img src={logo} alt="" />
        <h3>HelpMeOut</h3>
      </a>
      <div className="features">
        <a href="#features">Features</a>
        <a href="#how_it_works">How it works</a>
      </div>
      <Link to="login">Get started</Link>
    </div>
  );
};

export default Navbar;
