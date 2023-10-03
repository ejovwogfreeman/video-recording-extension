import React, { useState } from "react";
import "../css/Videos.css";
import { FaSearch } from "react-icons/fa";
// import video from "../assets/record.mp4";
import { FiLink2 } from "react-icons/fi";
import { CgMoreVertical } from "react-icons/cg";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Loader from "../components/Loader";

// const recent = [
//   {
//     id: 1,
//     video: video,
//     title: "THE NEW VIDEO",
//     date: "20th SEPT, 2022",
//   },
//   {
//     id: 2,
//     video: video,
//     title: "THE NEW VIDEO",
//     date: "20th SEPT, 2022",
//   },
//   {
//     id: 3,
//     video: video,
//     title: "THE NEW VIDEO",
//     date: "20th SEPT, 2022",
//   },
//   {
//     id: 4,
//     video: video,
//     title: "THE NEW VIDEO",
//     date: "20th SEPT, 2022",
//   },
// ];

const Video = () => {
  const [videos, setVideos] = useState([]);

  // Define the URL of the API endpoint where your videos are hosted
  const apiUrl = "https://seashell-app-4jicj.ondigitalocean.app/api/videos";

  // Make a GET request using the Fetch API
  fetch(apiUrl)
    .then((response) => {
      // Check if the response status is OK (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response as JSON
      return response.json();
    })
    .then((videosData) => {
      // Handle the retrieved videos data
      console.log("Videos data:", videosData.data);
      setVideos(videosData.data);

      // You can now work with the videosData, which contains the list of videos
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("Fetch error:", error);
    });

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
          {!videos ? (
            <Loader />
          ) : (
            <>
              {videos.map((x) => {
                return (
                  <div className="video" key={Math.random()}>
                    <video src={x.video} width="100%"></video>
                    <div className="title-link">
                      <h3>{x.title}</h3>
                      <Link to={`/video/${x.vId}`}>
                        {<FiLink2 />}
                        {<CgMoreVertical />}
                      </Link>
                    </div>
                    <small>{x.date}</small>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
