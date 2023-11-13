import "./css/trandBox.css";
function TrandBox() {
  return (
    <div className="tranding-col">
      <a href="#">
        <p>Trending in pakistan</p>
        <h3>#BoycottIndoPakMatch</h3>
        <p>25.k posts</p>
      </a>
      <div className="icon-wrapper">
        <div className="icon">
          <button className="button-setting">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrandBox;
