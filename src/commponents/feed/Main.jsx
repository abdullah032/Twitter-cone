import "./css/main.css";
import SideBar from "../aside";
import FeedNav from "../FeedNav/FeedNav";
import Post from "../post";
import MessageBox from "../messageBox";
function Main({ children }) {
  return (
    <main id="main">
      <section className="main-content">
        {children}
        {/* <FeedNav />
        <MessageBox />
        <div className="all-posts">
          <Post />
          <Post />
          <Post />
          <Post />
        </div> */}
      </section>
    </main>
  );
}

export default Main;
