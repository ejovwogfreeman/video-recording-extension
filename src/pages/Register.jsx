import React, { useState } from "react";
import "../css/Login.css";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import Navbar from "../components/Navbar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // const auth = getAuth();
    // if (!email || !password) {
    //   toast.error("PLEASE FILL ALL FIELDS");
    //   return setIsLoading(false);
    // }
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   const user = auth.currentUser;
    //   sessionStorage.setItem("galleryUser", JSON.stringify(user));
    //   toast.success("LOGIN SUCCESSFUL");
    //   navigate("/");
    // } catch (error) {
    //   toast.error("INVALID CREDENTIALS");
    //   setEmail("");
    //   setPassword("");
    //   console.error("Error:", error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="form-container">
          <div className="text">
            <h3>Login or Sign Up</h3>
            <small className="welcome">
              Join millions of others in sharing successful moves on
              <strong>HelpMeOut</strong>
            </small>
            <Link to="/" className="oAuth">
              <img src={google} alt="" />
            </Link>
            <Link to="/" className="oAuth">
              <img src={facebook} alt="" />
            </Link>
            <div className="or">
              <div className="line"></div>
              <span>or</span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="1Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="button">
              <button disabled={isLoading} type="submit">
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
            <small>
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
