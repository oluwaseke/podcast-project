import "./footer.scss";

import { Link } from "react-router-dom";
import logo from "../assets/logoPunch.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-border"></div>
      <div className="footer-content">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="Punch Newspapers Logo" />
          </Link>
        </div>
        <div className="footer-links">
          <ul>
            <li>Terms of Use</li>
            <li>About the BBC</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>Accessibility Help</li>
          </ul>
          <hr />
          <ul>
            <li>Parental Guidance</li>
            <li>Contact the BBC</li>
            <li>Get Personalised Newsletters</li>
            <li>Advertise with us</li>
            <li>Life Stories</li>
          </ul>
          <hr />
          <ul>
            <li>Stay In The Know</li>
            <li>Sport</li>
            <li>Technology</li>
            <li>True Crime</li>
          </ul>
          <hr />
          <ul>
            <li>Parental Guidance</li>
            <li>Contact the BBC</li>
            <li>Get Personalised Newsletters</li>
            <li>Advertise with Us</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright &#169; 2022 BBC. The BBC is not responsible for the content
          of external sites. Read about our approach to external linking.
        </p>
      </div>
    </div>
  );
}
