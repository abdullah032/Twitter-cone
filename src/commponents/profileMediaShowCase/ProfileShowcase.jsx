import "./css/profileShowcase.css";
import profile from "../../assets/images/react.svg";
function ProfileMediaShowCase() {
  return (
    <div className="ProfileMediaShowCase">
      <div className="row">
        <div className="col">
          <img src={profile} alt="" />
        </div>
        <div className="col">
          <img src={profile} alt="" />
        </div>
        <div className="col">
          <img src={profile} alt="" />
        </div>
        <div className="col">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProfileMediaShowCase;
