import "./css/aside.css";
import { Link } from "react-router-dom";

function Aside({ children }) {
  return (
    <aside>
      {children}

      <footer id="main-footer">
        <Link to="/">Terms of services</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Cookie Policy</Link>
        <Link to="/">Accesssibility</Link>
        <Link to="/">Ads info</Link>
        <Link to="/">More...</Link>
        <p>&copy; 2023</p>
      </footer>
    </aside>
  );
}

export default Aside;
