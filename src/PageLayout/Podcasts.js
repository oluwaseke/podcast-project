import "./podcasts.scss";

import { mdiPlayCircle, mdiTriangle } from "@mdi/js";

import Icon from "@mdi/react";
import img1 from "../assets/image 3.png";
import img2 from "../assets/image 4.png";
import img3 from "../assets/image 5.png";
import img4 from "../assets/image 6.png";
import img5 from "../assets/image 7.png";
import img6 from "../assets/image 8.png";
import profileImg from "../assets/Ellipse 2.png";

export default function Podcasts() {
  const audio = (
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
      <Icon className="red" path={mdiPlayCircle} size={1} />
    </div>
  );
  return (
    <div className="podcast-wrapper">
      <h2>Upcoming Podcasts</h2>
      <div className="cards-container">
        <div className="card">
          <img src={img1} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
        </div>
        <div className="card">
          <img src={img2} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
        </div>
        <div className="card">
          <img src={img3} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
        </div>
        <div className="card">
          <img src={img4} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
        </div>
        <div className="card">
          <img src={img5} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
        </div>
        <div className="card">
          <img src={img6} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
        </div>
      </div>
      <div className="live-podcasts-container">
        <div className="live-heading">
          <h1>Listen Live</h1>
          <h2>
            <div className="circle"></div>
            Live Podcasts
          </h2>
        </div>
        <div className="live-container">
          <button>
            <Icon className="triangle-left" path={mdiTriangle} size={2} />
          </button>
          <div className="cards">
            <div className="live-card">
              <div className="card-content">
                <h3> My Life Experience, 4years in Lagos</h3>
                <div className="name-container">
                  <img src={profileImg} alt="Avatar" /> John Doe Freeman
                </div>
                {audio}
              </div>
            </div>
            <div className="live-card">
              <div className="card-content">
                <h3> My Life Experience, 4years in Lagos</h3>
                <div className="name-container">
                  <img src={profileImg} alt="Avatar" /> John Doe Freeman
                </div>
                {audio}
              </div>
            </div>
            <div className="live-card">
              <div className="card-content">
                <h3> My Life Experience, 4years in Lagos</h3>
                <div className="name-container">
                  <img src={profileImg} alt="Avatar" /> John Doe Freeman
                </div>
                {audio}
              </div>
            </div>
            <div className="live-card">
              <div className="card-content">
                <h3> My Life Experience, 4years in Lagos</h3>
                <div className="name-container">
                  <img src={profileImg} alt="Avatar" /> John Doe Freeman
                </div>
                {audio}
              </div>
            </div>
            <div className="live-card">
              <div className="card-content">
                <h3> My Life Experience, 4years in Lagos</h3>
                <div className="name-container">
                  <img src={profileImg} alt="Avatar" /> John Doe Freeman
                </div>
                {audio}
              </div>
            </div>
            <div className="live-card">
              <div className="card-content">
                <h3> My Life Experience, 4years in Lagos</h3>
                <div className="name-container">
                  <img src={profileImg} alt="Avatar" /> John Doe Freeman
                </div>
                {audio}
              </div>
            </div>
          </div>
          <button>
            <Icon className="triangle-right" path={mdiTriangle} size={2} />
          </button>
        </div>
      </div>
      <div className="featured-container">
        <div className="featured-heading">
          <h2>Featured Podcasters</h2>
          <h1 style={{ textAlign: "center" }}>Top Seven</h1>
        </div>
        <div className="featured-cards">
          <div className="featured-card featured-1">
            <div className="button-container">
              <button>Subscribe</button>
            </div>
            <div className="featured-card-content">
              John <br /> Doe Freeman
            </div>
            <div className="inner-container"></div>
          </div>
          <div className="featured-card featured-2">
            <div className="button-container">
              <button>Subscribe</button>
            </div>
            <div className="featured-card-content">
              John <br /> Doe Freeman
            </div>
            <div className="inner-container"></div>
          </div>
          <div className="featured-card featured-3">
            <div className="button-container">
              <button>Subscribe</button>
            </div>
            <div className="featured-card-content">
              John <br /> Doe Freeman
            </div>
            <div className="inner-container"></div>
          </div>
          <div className="featured-card featured-1">
            <div className="button-container">
              <button>Subscribe</button>
            </div>
            <div className="featured-card-content">
              John <br /> Doe Freeman
            </div>
            <div className="inner-container"></div>
          </div>
          <div className="featured-card featured-2">
            <div className="button-container">
              <button>Subscribe</button>
            </div>
            <div className="featured-card-content">
              John <br /> Doe Freeman
            </div>
            <div className="inner-container"></div>
          </div>
          <div className="featured-card featured-3">
            <div className="button-container">
              <button>Subscribe</button>
            </div>
            <div className="featured-card-content">
              John <br /> Doe Freeman
            </div>
            <div className="inner-container"></div>
          </div>
          <div className="featured-card featured-1">
            <div className="button-container">
              <button>Subscribe</button>
            </div>
            <div className="featured-card-content">
              John <br /> Doe Freeman
            </div>
            <div className="inner-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
