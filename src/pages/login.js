import "./styles.scss";

import { FaFacebook, FaTwitter } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Nav from "../PageLayout/Nav";

export default function Login() {
  const styles = {
    icon: { height: "30px", width: "25px" },
    red: { color: "#ff0000" },
  };
  return (
    <>
      <Nav />
      <div className="container">
        <div className="form-container">
          <h1>
            Login <span>.</span>
          </h1>
          <div className="input-items">
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="email" placeholder="Password" />
          </div>
          <div className="form-line-element">
            <p>
              New Here <span>? </span>
              <Link to="/signup">Sign Up Here</Link>
            </p>
            <Link style={{ color: "#000000" }} to="/forgotPassword">
              Forgot Password
              <span style={styles.red}>?</span>
            </Link>
          </div>
          <div className="line">
            <div className="hr"></div>
            <p>Or Login with</p>
            <div className="hr"></div>
          </div>
          <div className="social-icons">
            <FcGoogle style={styles.icon} />
            <FaTwitter style={{ ...styles.icon, color: "#26a7de" }} />
            <FaFacebook style={{ ...styles.icon, color: "#4267B2" }} />
          </div>
          <div className="btn-container">
            <Link to="/dashboard">
              <button className="submit-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
