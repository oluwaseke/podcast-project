import "./getstarted.scss";

import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiPlayCircle } from "@mdi/js";
import profileImg from "../assets/Ellipse 2.png";

export default function GetStarted() {
  return (
    <div className="section-container">
      <div className="get-started"></div>
      <div className="reach-out-container">
        <h1>Reach out to 15million audience daily. </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
          accumsan hac purus volutpat ultrices. Vitae, sem dignissim vitae nunc
          aliquet integer ac suspendisse aliquet. Vulputate dictum egestas
          potenti mi amet. Aenean convallis ut vel in viverra.
        </p>
        <Link to="/signup">
          <button>Get Started</button>
        </Link>
      </div>
      <div className="featured-container">
        <div className="img-container">
          <h2>Featured Podcast</h2>
          <div className="audio-container">
            <div className="audio-bars">
              <div className="bars sm-bar"></div>
              <div className="bars md-bar"></div>
              <div className="bars lg-bar"></div>
              <div className="bars lg-bar"></div>
              <div className="bars md-bar"></div>
              <div className="bars sm-bar"></div>
              <div className="bars sm-bar"></div>
              <div className="bars md-bar"></div>
              <div className="bars lg-bar"></div>
              <div className="bars lg-bar"></div>
              <div className="bars md-bar"></div>
              <div className="bars sm-bar"></div>
              <div className="bars sm-bar"></div>
              <div className="bars md-bar"></div>
              <div className="bars lg-bar"></div>
              <div className="bars lg-bar"></div>
              <div className="bars md-bar"></div>
              <div className="bars sm-bar"></div>
              <div className="bars sm-bar"></div>
              <div className="bars md-bar"></div>
              <div className="bars lg-bar"></div>
              <div className="bars lg-bar"></div>
              <div className="bars md-bar"></div>
              <div className="bars sm-bar"></div>
              <div className="bars sm-bar"></div>
              <div className="bars md-bar"></div>
              <div className="bars lg-bar"></div>
              <div className="bars lg-bar"></div>
              <div className="bars md-bar"></div>
              <div className="bars sm-bar"></div>
              <div className="bars sm-bar"></div>
              <div className="bars md-bar"></div>
              <div className="bars lg-bar"></div>
              <div className="bars played-bars lg-bar"></div>
              <div className="bars played-bars md-bar"></div>
              <div className="bars played-bars sm-bar"></div>
              <div className="bars played-bars sm-bar"></div>
              <div className="bars played-bars md-bar"></div>
              <div className="bars played-bars lg-bar"></div>
              <div className="bars played-bars lg-bar"></div>
              <div className="bars played-bars md-bar"></div>
              <div className="bars played-bars sm-bar"></div>
              <div className="bars played-bars sm-bar"></div>
              <div className="bars played-bars md-bar"></div>
              <div className="bars played-bars lg-bar"></div>
              <div className="bars played-bars lg-bar"></div>
              <div className="bars played-bars md-bar"></div>
              <div className="bars played-bars sm-bar"></div>
              <div className="bars played-bars sm-bar"></div>
              <div className="bars played-bars md-bar"></div>
              <div className="bars played-bars lg-bar"></div>
              <div className="bars played-bars lg-bar"></div>
              <div className="bars played-bars md-bar"></div>
              <div className="bars played-bars sm-bar"></div>
            </div>
            <p>11:15</p>
            <Icon className="red" path={mdiPlayCircle} size={2.25} />
          </div>
        </div>
        <div className="caption">
          <h2>My Life Experience, 4years in Lagos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
            accumsan hac purus volutpat ultrices. Vitae, sem dignissim{" "}
          </p>
          <div className="author-container">
            <img src={profileImg} alt="John Doe Freeman" />
            <div className="author-name">
              <h6>John Doe Freeman</h6>
              <p>16 - January - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
