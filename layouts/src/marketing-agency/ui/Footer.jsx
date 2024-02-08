// rrd imports
import { Link } from "react-router-dom";

// img import
import logo from "../images/logo.png";

// icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer main-grid">
      <div className="footer-main">
        <img src={logo} alt="logo" className="footer-logo" />
        <p className="footer-body">
          Two brothers from Chicago that are just trying to pay back their debt
          by helping others with their SEO, SEM, and Content Marketing needs.
        </p>
        <p className="footer-fineprint">© Jake&Elwood 2024</p>
      </div>
      <ul className="footer-social">
        <li className="social-item">
          <Link to="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </Link>
        </li>
        <li className="social-item">
          <Link to="https://twitter.com/" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </Link>
        </li>
        <li className="social-item">
          <Link to="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
