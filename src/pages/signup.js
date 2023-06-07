import "./styles.scss";

import { FaFacebook, FaTwitter } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Nav from "../PageLayout/Nav";

export default function SignUp() {
  const styles = {
    icon: { height: "30px", width: "25px" },
    formLine: { justifyContent: "flex-start", gap: "3px" },
  };
  return (
    <>
      <Nav />
      <div className="container">
        <div style={{ width: "1100px" }} className="form-container">
          <h1>
            Sign Up <span>.</span>
          </h1>
          <div className="input-items">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
            <input type="password" placeholder="Password" />
          </div>
          <div style={styles.formLine} className="form-line-element">
            <p>
              Already have an account <span>?</span>
            </p>
            <Link to="/login">Login Here</Link>
          </div>
          <div className="line">
            <div className="hr"></div>
            <p>Or Sign up with </p>
            <div className="hr"></div>
          </div>
          <div className="social-icons">
            <FcGoogle style={styles.icon} />
            <FaTwitter style={{ ...styles.icon, color: "#26a7de" }} />
            <FaFacebook style={{ ...styles.icon, color: "#4267B2" }} />
          </div>
          <div className="btn-container">
            <Link to="/login">
              <button className="submit-btn">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
