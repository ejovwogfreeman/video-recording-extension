import React from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
        <h3>HelpMeOut</h3>
      </Link>
      {location.pathname === "/login" || location.pathname === "/register" ? (
        ""
      ) : (
        <>
          <div className="features">
            <a href="#features" className="feat">
              Features
            </a>
            <a href="#how_it_works">How it works</a>
          </div>
          <Link to="login">Get started</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
