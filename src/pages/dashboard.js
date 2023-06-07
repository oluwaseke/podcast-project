import "./dashboard.scss";

import {
  mdiChevronLeftCircle,
  mdiCog,
  mdiHeadphones,
  mdiHeart,
  mdiHistory,
  mdiHome,
  mdiMicrophone,
  mdiPlayCircle,
  mdiPodcast,
  mdiSkipNext,
  mdiSkipPrevious,
  mdiTriangleDown,
} from "@mdi/js";

import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import img1 from "../assets/image 3.png";
import img2 from "../assets/image 4.png";
import img3 from "../assets/image 5.png";
import img4 from "../assets/image 6.png";
import img5 from "../assets/image 7.png";
import img6 from "../assets/transparent_img.png";
import logo from "../assets/logoPunch.png";
import profileImg from "../assets/Ellipse 2.png";

export default function Dashboard() {
  const clickHandler = () => {};
  return (
    <div className="dashboard">
      <header>
        <div className="search">
          <input type="text" name="search" placeholder="Search" />
          <button type="submit">GO</button>
        </div>
        <div className="profile">
          <img src={profileImg} alt="" />
          <Icon className="icon" path={mdiTriangleDown} size={0.5} />
        </div>
      </header>
      <nav className="side-nav">
        <div className="top">
          <Link exact to="/">
            <img src={logo} alt="" />
          </Link>
          <button onClick={clickHandler}>
            <Icon className="chevron" path={mdiChevronLeftCircle} size={1} />
          </button>
        </div>
        <div>
          <ul>
            <Link exact to="/">
              <li>
                <span>
                  <Icon className="icon" path={mdiHome} size={0.75} />
                </span>
                <span>Home</span>
              </li>
            </Link>
            <Link>
              <li>
                <span>
                  <Icon className="icon" path={mdiHistory} size={0.75} />
                </span>
                <span>History</span>
              </li>
            </Link>
            <Link>
              <li>
                <span>
                  <Icon className="icon" path={mdiHeart} size={0.75} />
                </span>
                <span>Favourite</span>
              </li>
            </Link>
            <Link>
              <li>
                <span>
                  <Icon className="icon" path={mdiPodcast} size={0.75} />
                </span>
                <span>My Podcasts</span>
              </li>
            </Link>
            <Link>
              <li>
                <span>
                  <Icon className="icon" path={mdiMicrophone} size={0.75} />
                </span>
                <span>New Podcast</span>
              </li>
            </Link>
            <Link>
              <li>
                <span>
                  <Icon className="icon" path={mdiCog} size={0.75} />
                </span>
                <span>Settings</span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      <main>
        <h2>Home</h2>
        <div className="main-header">
          <div className="content-wrapper">
            <div>
              <div className="featured-block">Featured</div>
              <div className="icons-container">
                <button className="icon-btn">
                  <Icon
                    style={{ color: "#ff0000" }}
                    path={mdiHeadphones}
                    size={0.75}
                  />{" "}
                  547
                </button>
                <button className="icon-btn">
                  <Icon
                    style={{ color: "#ff0000" }}
                    path={mdiHeart}
                    size={0.75}
                  />{" "}
                  547
                </button>
              </div>
            </div>
            <div className="main-header-text">
              <h1> Business Banter</h1>
              <h6> With Omolade</h6>
              <p>15 mins</p>
            </div>
          </div>
          <img src={img6} alt="" />
        </div>
        <div className="main-heading">
          Just In
          <div></div>
        </div>
        <div className="cards-wrapper">
          <div className="card">
            <img className="card-img" src={img1} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h4>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h4>
            <p>15mins </p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>

          <div className="card">
            <img src={img2} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h4>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h4>
            <p>15mins </p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img3} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h4>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h4>
            <p>15mins </p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img4} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h4>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h4>
            <p>15mins </p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
        </div>
        <div className="main-heading">
          Trending
          <div></div>
        </div>
        <div className="cards-wrapper">
          <div className="card">
            <img src={img1} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h4>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h4>
            <p>15mins </p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img2} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h4>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h4>
            <p>15mins </p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img3} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h4>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h4>
            <p>15mins </p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img4} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h4>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h4>
            <p>15mins </p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
        </div>
      </main>
      <aside>
        <h2>Now Playing</h2>
        <div className="img-wrapper">
          <h4>#12: Small World</h4>
        </div>
        <div className="audio-player_wrapper">
          <div className="audio-player">
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
            <Icon className="play" path={mdiPlayCircle} size={1.6} />
          </div>
          <div className="skip-wrapper">
            <Icon path={mdiSkipPrevious} size={1} />
          </div>
          <div className="skip-wrapper">
            <Icon path={mdiSkipNext} size={1} />
          </div>
        </div>
        <h2>Up Coming</h2>
        <div className="upcoming-cards">
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>{" "}
          <div className="card">
            <img src={img5} alt="" />
            <div>
              <h3>#12: Small World</h3>
              <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
              <p>02 Apr 2020</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
