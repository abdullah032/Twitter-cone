import "./css/whoToFollow.css";
import tick from "../../assets/images/tick.png";
import userImage from "../../assets/images/react.svg";
function WhoToFollow() {
  return (
    <div id="to-follow-wrapper">
      <h2>You might like</h2>
      <div className="row">
        {[1, 2, 3, 4, 5].map((x, i) => {
          return (
            <div className={"col " + ("col" + i)} key={i}>
              <div className="header">
                <div className="round-box">
                  <img src={userImage} alt="" />
                </div>
                <div className="text">
                  <a href="/">
                    <h4>Bill Gates</h4>
                  </a>
                  <p>@Bill Gates</p>
                </div>
              </div>
              <div>
                <button>Follow</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="show-more">
        <a href="#">Show More</a>
      </div>
    </div>
  );
}

export default WhoToFollow;
