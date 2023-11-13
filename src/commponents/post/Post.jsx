import "./css/post.css";
import tick from "../../assets/images/tick.png";
import media from "../../assets/images/ik.jpg";
import profile from "../../assets/images/react.svg";

function Post({ number }) {
  return (
    <div className="post">
      <header className="post-header">
        <div className="round-box">
          {profile && <img src={profile} alt="user Image" />}
        </div>
        <img src={tick} alt="" width={20} />
        <p>@_FridKhan .</p>
        <span>6h</span>
      </header>
      <main id="post-main-body">
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero
            obcaecati similique, doloribus facilis doloremque magni maxime
            dignissimos maiores adipisci.
          </p>
        </div>
        <div className="posted-media">
          <img src={media} alt="" />
        </div>
      </main>
      <footer className="post-footer">
        <a href="/">
          <i className="far fa-comment"></i> <span>90,50</span>
        </a>
        <a href="/">
          <i className="fas fa-retweet"></i> <span>100,9</span>
        </a>
        <a href="/">
          <i className="far fa-heart"></i>
          <span>90,50</span>
        </a>
        <a href="/">
          <i className="far fa-chart-bar"></i> <span>90,50</span>
        </a>
        <a href="/">
          <i className="fas fa-download"></i> <span>100</span>
        </a>
      </footer>
    </div>
  );
}

export default Post;
