import React from "react";
import "../css/Topbar.css";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="top-bar">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
        <h3>HelpMeOut</h3>
      </Link>
      <div className="profile">
        <CgProfile /> <span>John Mark</span> <MdOutlineKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Topbar;
