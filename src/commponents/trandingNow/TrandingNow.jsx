import "./css/tranding.css";
import TrandBox from "./TrandBox";
function TrandingNow() {
  return (
    <div id="tranding">
      <h2>Trends for you</h2>
      <div className="row">
        <TrandBox />
        <TrandBox />
        <TrandBox />
        <TrandBox />
        <TrandBox />
        <TrandBox />
        <TrandBox />
      </div>

      <div className="show-more">
        <a href="#">Show more</a>
      </div>
    </div>
  );
}

export default TrandingNow;
