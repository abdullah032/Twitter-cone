import { useState } from "react";
import profile from "../../assets/images/react.svg";
import { Link } from "react-router-dom";
import "./css/header.css";
import MessageBox from "../messageBox";
function Header() {
  let [post, setPost] = useState(false);

  const closeBox = () => setPost(!post);
  const openBox = () => setPost(!post);
  return (
    <>
      {post && (
        <div className="popup-post">
          <div className="wrapper">
            <i className="fa fa-times" onClick={closeBox}></i>
            <MessageBox />
          </div>
        </div>
      )}
      <header id="main-header">
        <div className="logo">
          <i className="fab fa-twitter"></i>
        </div>
        <nav id="main-nav">
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <i className="fas fa-search"></i>
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link to="/notification">
                <i className="far fa-bell"></i>
                <span>Notifications</span>
              </Link>
            </li>
            <li>
              <Link to="/messages">
                <i className="far fa-envelope"></i>
                <span>Messages</span>
              </Link>
            </li>
            <li>
              <Link to="/list">
                <i className="far fa-list-alt"></i>
                <span>Lists</span>
              </Link>
            </li>
            <li>
              <Link to="/compunities">
                <i className="fas fa-users"></i>
                <span>Comunitites</span>
              </Link>
            </li>
            <li>
              <Link to="/premium">
                <i className="fab fa-xing"></i>
                <span>Premium</span>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/home">
                <i className="fas fa-ellipsis-h"></i>
                <span>More</span>
              </Link>
            </li>
          </ul>

          <button className="pop-up-textarea" onClick={openBox}>
            Post
          </button>
        </nav>
        <div className="account">
          <div className="image-box round-box">
            {/* {profile && <img src={profile} alt="" />} */}
            {profile && <h3>A</h3>}
          </div>
          <div className="text">
            <h4>Abdullah</h4>
            <p>@abdullah8767...</p>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
