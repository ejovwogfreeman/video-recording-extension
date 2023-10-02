import React from "react";
import Navbar from "../components/Navbar";
import "../css/Home.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  BsArrowRightShort,
  BsRecordCircleFill,
  BsFillSendFill,
} from "react-icons/bs";
import { RiRefreshFill } from "react-icons/ri";
import img from "../assets/display.png";
import img2 from "../assets/screen.png";
import img3 from "../assets/record.png";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="header">
        <div className="left">
          <h1>
            Show Them, <br /> Don't Just Tell Them
          </h1>
          <p>
            Helo your friends and beloved ones by creating and sending videos on
            how to get things done on a website
          </p>
          <Link to="/videos">
            <span>See Your Videos</span>
            <BsArrowRightShort />
          </Link>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="grey"></div>
      <div id="features">
        <div className="left">
          <div>
            <div className="svg">
              <BsRecordCircleFill />
            </div>
            <section>
              <h3>Simple Screen Recording</h3>
              <p>
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </section>
          </div>
          <div>
            <div className="svg">
              <BsFillSendFill />
            </div>
            <section>
              <h3>Easy-to-Share URL</h3>
              <p>
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </section>
          </div>
          <div>
            <div className="svg">
              <RiRefreshFill />
            </div>
            <section>
              <h3>Revisit Recordings</h3>
              <p>
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </section>
          </div>
        </div>
        <div className="right">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="grey"></div>
      <div id="how_it_works">
        <div>
          <span>1</span>
          <h3>Record Screen</h3>
          <p>
            Click the "Start Recording" button in our extension. Choose which
            part of your scren to capture and who you want to send to
          </p>
          <img src={img3} alt="" />
        </div>
        <div>
          <span>2</span>
          <h3>Share Your Recording</h3>
          <p>
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform{" "}
          </p>
          <img src={img3} alt="" />
        </div>
        <div>
          <span>3</span>
          <h3>Learn Effortlessly</h3>
          <p>
            Recipients can access your video effortlessly through the provided
            link, with our user-friendly interface suitable for everyone{" "}
          </p>
          <img src={img3} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
