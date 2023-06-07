import "./hero.scss";

import { mdiCircleMedium, mdiPlayCircle } from "@mdi/js";

import Icon from "@mdi/react";
import React from "react";

export default function Hero() {
  /* const [isOpen, setIsOpen] = React.useState(true); */

  const onMouseOverHandler = () => {
    let element1 = document.getElementById("expanded-text-1");
    let element2 = document.getElementById("red-bar-2");
    let element3 = document.getElementById("red-bar-1");
    let element4 = document.getElementById("live");
    let element5 = document.getElementById("expanded-text-2");
    element1.classList.add("collapsed");
    element2.classList.add("collapsed");
    element3.classList.remove("collapsed");
    element4.classList.remove("hidden");
    element5.classList.remove("collapsed");
  };
  const onMouseOutHandler = () => {
    let element1 = document.getElementById("expanded-text-1");
    let element2 = document.getElementById("red-bar-2");
    let element3 = document.getElementById("red-bar-1");
    let element4 = document.getElementById("live");
    let element5 = document.getElementById("expanded-text-2");
    element1.classList.remove("collapsed");
    element2.classList.remove("collapsed");
    element3.classList.add("collapsed");
    element4.classList.add("hidden");
    element5.classList.add("collapsed");
  };
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          Record Your Story, Inspire Others <span>.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta cras
          consequat, ut amet ultrices purus enim accumsan. Nisl hendrerit
          pulvinar ac odio habitasse neque, tortor, sed auctor.{" "}
        </p>
        <div className="search-container">
          <form>
            <input type="text" name="search" placeholder="Search" />
            <button type="submit">GO</button>
          </form>
        </div>
      </div>
      <div className="hero-tiles">
        <div className="card card-1">
          <div id="expanded-text-1" className="card-expanded">
            <h1>
              <Icon className="red" path={mdiCircleMedium} size={1.5} />
              Live Podcast
            </h1>
            <p>With Tina</p>
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
              <div className="p">11:15</div>
              <Icon className="play" path={mdiPlayCircle} size={2} />
            </div>
          </div>
          <div id="red-bar-1" className="red-title collapsed ">
            <h2>Live Podcast</h2>
            <h5>with Tina</h5>
          </div>
          <div id="live" className="live hidden">
            <Icon className="red" path={mdiCircleMedium} size={1} /> Live
          </div>
        </div>
        <div
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}
          className="card card-2"
        >
          <div id="expanded-text-2" className="card-expanded collapsed">
            <h1>
              <Icon className="red" path={mdiCircleMedium} size={1.5} />
              Fashion Trend
            </h1>
            <p>With Dreyman</p>
          </div>
          <div id="red-bar-2" className="red-title ">
            <h2>Fashion Trend</h2>
            <h5>with Dreyman</h5>
          </div>
        </div>
        <div className="card card-3">
          <div className="red-title">
            <h2>Business Banter</h2>
            <h5>with Dreyman</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
