import React from "react";
import "../css/Videos.css";
import { FaSearch } from "react-icons/fa";
import video from "../assets/record.mp4";
import { FiLink2 } from "react-icons/fi";
import { CgMoreVertical } from "react-icons/cg";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";

const recent = [
  {
    id: 1,
    video: video,
    title: "THE NEW VIDEO",
    date: "20th SEPT, 2022",
  },
  {
    id: 2,
    video: video,
    title: "THE NEW VIDEO",
    date: "20th SEPT, 2022",
  },
  {
    id: 3,
    video: video,
    title: "THE NEW VIDEO",
    date: "20th SEPT, 2022",
  },
  {
    id: 4,
    video: video,
    title: "THE NEW VIDEO",
    date: "20th SEPT, 2022",
  },
];

const Video = () => {
  return (
    <div className="container">
      <Topbar />
      <div className="name-search">
        <div className="left">
          <h1>Hello, John Mark</h1>
          <span>Here are your recoreded videos</span>
        </div>
        <div className="search">
          <FaSearch />
          <input type="text" placeholder="search for a particular video" />
        </div>
      </div>
      <div className="videos">
        <p style={{ marginBottom: "20px" }}>Recent Files</p>
        <div className="recent">
          {recent.map((x) => {
            return (
              <div className="video" key={x.id}>
                <video src={x.video} width="100%"></video>
                <div className="title-link">
                  <h3>{x.title}</h3>
                  <Link to={`/video/${x.id}`}>
                    {<FiLink2 />}
                    {<CgMoreVertical />}
                  </Link>
                </div>
                <small>{x.date}</small>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Video;
