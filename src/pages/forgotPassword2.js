import "./styles.scss";

import { Link } from "react-router-dom";
import Nav from "../PageLayout/Nav";

export default function ForgotPassword2() {
  const styles = {
    red: { color: "#FF0000" },
    p: { marginBottom: "30px", marginTop: "-17px" },
  };
  const spanStyle = { ...styles.red, marginLeft: "-18px" };
  return (
    <>
      <Nav />{" "}
      <div className="container">
        <div className="form-container">
          <h1>
            Forgot Password <span style={spanStyle}>.</span>
          </h1>
          <p style={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
            elementum vitae molestie mauris phasellus.
          </p>
          <div className="input-items">
            <input type="password" name="password" placeholder="New Password" />
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="btn-container">
            <Link to="/forgotPassword3">
              <button className="long-submit-btn submit-btn">
                Save Password
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
