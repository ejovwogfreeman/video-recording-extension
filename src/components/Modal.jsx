import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import sent from "../assets/sent.png";
import "../css/Modal.css";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="dark-bg"></div>
      <div className="modal">
        <div className="svg-cont">
          <IoCloseCircleOutline />
        </div>
        <br />
        <img src={sent} alt="" />
        <p>
          Your email has been sent to <br />
          ejovwogfreeman007@gmail.com
        </p>
        <p>
          Would you need to view this video later? <br />
          Save to your account now!
        </p>
        <button>Save Now</button>
        <small>
          Don't have an account yet? <Link to="/register">Create account</Link>
        </small>
      </div>
    </div>
  );
};

export default Modal;
