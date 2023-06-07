import "./Nav.scss";

import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logoPunch.png";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="Punch Logo" />
      </Link>
      <div className="links">
        <div>
          <ul>
            <NavLink exact to="/" activeClassName="active">
              <li>Home</li>
            </NavLink>
            <NavLink to="/intheknow" activeClassName="active">
              <li>Stay In The Know</li>
            </NavLink>
            <NavLink to="/sport" activeClassName="active">
              <li>Sport</li>
            </NavLink>
            <Link>
              <li>Technology</li>
            </Link>
            <Link>
              <li>True Crime</li>
            </Link>
            <NavLink to="/live-stories" activeClassName="active">
              <li>Live Stories</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
