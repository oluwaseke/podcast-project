import "./styles.scss";

import { Link } from "react-router-dom";
import Nav from "../PageLayout/Nav";

export default function ForgotPassword() {
  const styles = {
    red: { color: "#FF0000" },
    p: { marginBottom: "30px", marginTop: "-15px" },
  };
  const spanStyle = { ...styles.red, marginLeft: "-18px" };
  return (
    <>
      <Nav />
      <div className="container">
        <div className=" form-container">
          <h1>
            Forgot Password <span style={spanStyle}>.</span>{" "}
          </h1>
          <p style={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
            elementum vitae molestie mauris phasellus.
          </p>
          <input type="email" name="email" placeholder="Email" />
          <div className="btn-container">
            <Link to="/forgotPassword2">
              <button style={{ width: "200px" }} className="submit-btn">
                Reset Password
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
