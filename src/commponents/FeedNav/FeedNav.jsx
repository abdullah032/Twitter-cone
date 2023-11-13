import "./css/feedNav.css";
function FeedNav({ pageName, children }) {
  return (
    <nav id="feed-nav">
      <div className="col">
        <h2>{pageName}</h2>
      </div>
      <div className="row">{children}</div>
    </nav>
  );
}

export default FeedNav;
