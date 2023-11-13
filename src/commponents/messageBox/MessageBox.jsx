import "./css/messageBox.css";
import img from "../../assets/images/react.svg";
import { useState } from "react";
function MessageBox() {
  let [postText, setPostText] = useState("What is happing?!");
  const removePlaceholder = () => {
    document.querySelector(".placeholder").remove();
  };

  const handleChange = (e) => {
    let element = e.target;
    let { innerHTML, textContent } = element;

    setPostText(textContent);
  };
  return (
    <div id="message-wrapper">
      <div className="wrapper">
        <div className="round-box">
          <img src={img} alt="" />
        </div>
        <p className="placeholder">What is happing!</p>
        <div
          className="message-box"
          contentEditable="true"
          onClick={removePlaceholder}
          onInput={handleChange}
        ></div>
      </div>
      <div className="footer">
        <div className="icon">
          <i className="fas fa-image"></i>
        </div>
        <div className="icon">
          <i className="fas fa-poll"></i>
        </div>
        <div className="icon">
          <i className="far fa-smile-wink"></i>
        </div>
        <div className="icon">
          <i className="fas fa-clipboard-list"></i>
        </div>
        <div className="icon">
          <i className="fas fa-map-marker"></i>
        </div>

        <button className="button-setting">Post</button>
      </div>
    </div>
  );
}

export default MessageBox;
