import React, { useState } from "react";
import "../css/Video.css";
import Topbar from "../components/Topbar";
import video from "../assets/record.mp4";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { BsFacebook, BsWhatsapp, BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const Video = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  let user = true;
  return (
    <div className="container">
      <Topbar />
      {user ? (
        <>
          <div className="video-comp">
            <p>Home / Recent Videos / How To Create A Facebook Ad Listing </p>
            <h1>
              <span>How To Create A Facebook Ad Listing</span>
              <IoCreateOutline />
            </h1>
            <video src={video} width="100%"></video>
            <div className="search-link">
              <div>
                <input type="text" placeholder="enter email of reciever" />
                <button onClick={handleModal}>Send</button>
              </div>
              <div>
                <input type="text" />
                <button>
                  <MdOutlineContentCopy />
                  <span>Copy</span>
                </button>
              </div>
            </div>
            <div className="share">
              <h2>Share Your Video</h2>
              <div className="buttons">
                <Link>
                  <BsFacebook />
                  <span>Facebook</span>
                </Link>
                <Link>
                  <BsWhatsapp />
                  <span>Whatsapp</span>
                </Link>
                <Link>
                  <BsTelegram />
                  <span>Telegram</span>
                </Link>
              </div>
            </div>
            <div className="transcript">
              <h2>Transcript</h2>
              <select name="" id="">
                <option value="">English</option>
              </select>
              <div>
                <span>1:01</span>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam omnis fugiat libero natus adipisci quod? Cum magnam
                  quia praesentium impedit illo non rem atque autem quae quasi
                  eius dolor facere voluptatibus aut iure corrupti, sed deserunt
                  hic earum
                </p>
              </div>
              <div>
                <span>1:01</span>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam omnis fugiat libero natus adipisci quod? Cum magnam
                  quia praesentium impedit illo non rem atque autem quae quasi
                  eius dolor facere voluptatibus aut iure corrupti, sed deserunt
                  hic earum
                </p>
              </div>
              <div>
                <span>1:01</span>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam omnis fugiat libero natus adipisci quod? Cum magnam
                  quia praesentium impedit illo non rem atque autem quae quasi
                  eius dolor facere voluptatibus aut iure corrupti, sed deserunt
                  hic earum
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="unauthenticated">
            <div className="left">
              <h1 style={{ marginBottom: "20px" }}>Your video is ready</h1>
              <small>Name</small>
              <p style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "10px" }}>
                  Your video is ready!
                </span>
                <IoCreateOutline />
              </p>
              <div className="search-link">
                <div>
                  <input type="text" placeholder="enter email of reciever" />
                  <button onClick={handleModal}>Send</button>
                </div>
                <section>
                  <h3 style={{ marginBottom: "10px" }}>Video Url</h3>
                  <div>
                    <input type="text" />
                    <button>
                      <MdOutlineContentCopy />
                      <span>Copy</span>
                    </button>
                  </div>
                </section>
              </div>
              <div className="share">
                <h2>Share Your Video</h2>
                <div className="buttons">
                  <Link>
                    <BsFacebook />
                    <span>Facebook</span>
                  </Link>
                  <Link>
                    <BsWhatsapp />
                    <span>Whatsapp</span>
                  </Link>
                  <Link>
                    <BsTelegram />
                    <span>Telegram</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="transcript">
                <video src={video} width="100%" controls></video>
                <section style={{ margin: "30px 0px 20px" }}>
                  <h2>Transcript</h2>
                  <select name="" id="">
                    <option value="">English</option>
                  </select>
                </section>
                <div>
                  <span>1:01</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam omnis fugiat libero natus adipisci quod? Cum magnam
                    quia praesentium impedit illo non rem atque autem quae quasi
                    eius dolor facere voluptatibus aut iure corrupti, sed
                    deserunt hic earum
                  </p>
                </div>
                <div>
                  <span>1:01</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam omnis fugiat libero natus adipisci quod? Cum magnam
                    quia praesentium impedit illo non rem atque autem quae quasi
                    eius dolor facere voluptatibus aut iure corrupti, sed
                    deserunt hic earum
                  </p>
                </div>
                <div>
                  <span>1:01</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam omnis fugiat libero natus adipisci quod? Cum magnam
                    quia praesentium impedit illo non rem atque autem quae quasi
                    eius dolor facere voluptatibus aut iure corrupti, sed
                    deserunt hic earum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {modal && <Modal handleModal={handleModal} />}
    </div>
  );
};

export default Video;
