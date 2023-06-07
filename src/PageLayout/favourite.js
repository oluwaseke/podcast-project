import "../pages/landing.scss";

import { mdiPlaylistMusic, mdiTriangle } from "@mdi/js";

import Icon from "@mdi/react";
import React from "react";
import img1 from "../assets/image 3.png";
import img2 from "../assets/image 4.png";
import img3 from "../assets/image 5.png";
import img4 from "../assets/image 6.png";
import img5 from "../assets/image 7.png";
import img6 from "../assets/image 8.png";

export default function FavouritePodcasts() {
  const [navPosition, setNavPosition] = React.useState(0);
  /* let list = document.getElementById("nav-ul").querySelectorAll("li"); */
  const leftTriangleHandler = () => {
    if (navPosition > 0) {
      setNavPosition(navPosition - 1);
    }
  };
  const rightTriangleHandler = () => {
    if (navPosition < 7) {
      setNavPosition(navPosition + 1);
    }
  };
  return (
    <div className="categories-container">
      <div className="heading">
        <h2> Catch up on your favourite podcasts</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className="categories-navbar">
        <button onClick={leftTriangleHandler}>
          <Icon className="triangle-left" path={mdiTriangle} size={1} />
        </button>
        <ul id="nav-ul">
          <li>All Categories</li> <li>Stay In The Know</li>
          <li>Sport</li>
          <li>Technology</li>
          <li>True Crime</li>
          <li>Life Stories</li>
          <li>Education</li>
          <li>Health</li>
        </ul>
        <button onClick={rightTriangleHandler}>
          <Icon className="triangle-right" path={mdiTriangle} size={1} />
        </button>
      </div>
      <div className="cards-container">
        <div className="card">
          <img src={img1} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
          <p>15mins</p>
          <button>
            <Icon path={mdiPlaylistMusic} size={1} />
            More Episodes
          </button>
        </div>
        <div className="card">
          <img src={img2} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
          <p>15mins</p>
          <button>
            <Icon path={mdiPlaylistMusic} size={1} />
            More Episodes
          </button>
        </div>
        <div className="card">
          <img src={img3} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
          <p>15mins</p>
          <button>
            <Icon path={mdiPlaylistMusic} size={1} />
            More Episodes
          </button>
        </div>
        <div className="card">
          <img src={img4} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
          <p>15mins</p>
          <button>
            <Icon path={mdiPlaylistMusic} size={1} />
            More Episodes
          </button>
        </div>
        <div className="card">
          <img src={img5} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
          <p>15mins</p>
          <button>
            <Icon path={mdiPlaylistMusic} size={1} />
            More Episodes
          </button>
        </div>
        <div className="card">
          <img src={img6} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
          <p>15mins</p>
          <button>
            <Icon path={mdiPlaylistMusic} size={1} />
            More Episodes
          </button>
        </div>
        <div className="card">
          <img src={img1} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
          <p>15mins</p>
          <button>
            <Icon path={mdiPlaylistMusic} size={1} />
            More Episodes
          </button>
        </div>
        <div className="card">
          <img src={img2} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
          <p>15mins</p>
          <button>
            <Icon path={mdiPlaylistMusic} size={1} />
            More Episodes
          </button>
        </div>
        <div className="card">
          <img src={img3} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
          <p>15mins</p>
          <button>
            <Icon path={mdiPlaylistMusic} size={1} />
            More Episodes
          </button>
        </div>
        <div className="card">
          <img src={img4} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
          <p>15mins</p>
          <button>
            <Icon path={mdiPlaylistMusic} size={1} />
            More Episodes
          </button>
        </div>
        <div className="card">
          <img src={img5} alt="Pain - Ryan Jones" />
          <h5>Jane Doe Migan</h5>
          <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
          <p>15mins</p>
          <button>
            <Icon path={mdiPlaylistMusic} size={1} />
            More Episodes
          </button>
        </div>
      </div>
    </div>
  );
}
