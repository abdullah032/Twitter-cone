import "./css/notification.css";
import ik from "../../assets/images/ik.jpg";
function NotificationMessage() {
  return (
    <a href="/">
      <div className="wrapper">
        <div className="round-box">
          <img src={ik} alt="" />
        </div>
        <h4>Imran Khan</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem enim nobis sapiente qui necessitatibus explicabo
          architecto aliquid quasi nihil! Voluptate accusamus similique
          perferendis deserunt doloremque quae quidem voluptatem in
          necessitatibus?
        </p>
      </div>
    </a>
  );
}

export default NotificationMessage;
