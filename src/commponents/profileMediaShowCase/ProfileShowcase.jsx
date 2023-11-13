import "./css/profileShowcase.css";
import ik from "../../assets/images/ik.jpg";
function ProfileMediaShowCase() {
  return (
    <div className="ProfileMediaShowCase">
      <div className="row">
        <div className="col">
          <img src={ik} alt="" />
        </div>
        <div className="col">
          <img src={ik} alt="" />
        </div>
        <div className="col">
          <img src={ik} alt="" />
        </div>
        <div className="col">
          <img src={ik} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProfileMediaShowCase;
