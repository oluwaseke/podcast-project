import "./styles.scss";

import { Link } from "react-router-dom";
import Nav from "../PageLayout/Nav";

export default function ForgotPassword3() {
  const styles = {
    span: {
      marginLeft: "0",
    },
  };
  return (
    <>
      <Nav />
      <div className="container">
        <div className="reset-container">
          <h1>
            Password Reset Successful
            <span style={styles.span}>.</span>
          </h1>
          <div className="btn-container">
            <Link to="/login">
              <button className=" submit-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
