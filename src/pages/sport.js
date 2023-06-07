import "./sport.scss";
import "../PageLayout/getstarted.scss";

import Footer from "../PageLayout/footer";
import Icon from "@mdi/react";
import Nav from "../PageLayout/Nav";
import img1 from "../assets/image 3.png";
import img2 from "../assets/image 4.png";
import img3 from "../assets/image 5.png";
import img4 from "../assets/image 6.png";
import img5 from "../assets/image 7.png";
import { mdiBookmark } from "@mdi/js";
import { mdiCircleSmall } from "@mdi/js";
import { mdiHeadphones } from "@mdi/js";
import { mdiHeart } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";
import { mdiSkipNext } from "@mdi/js";
import { mdiSkipPrevious } from "@mdi/js";

export default function Sport() {
  return (
    <>
      <Nav />
      <div className="sport">
        <div className="sport-header">
          <div className="sm-header">
            <div className="sm-world-container">
              <div className="red-bar"></div>
              <div className="sport-header-img"></div>
              <div className="sm-world">
                <h1>#12 Small World</h1>
                <div className="hr"></div>
                <h5>With Dreyman</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
                  cras consequat, ut amet ultrices purus enim accumsan. Nisl
                  hendrerit pulvinar ac odio habitasse neque, tortor, sed
                  auctor. Pellentesque in
                </p>
                <div className="buttons">
                  <div className="icons">
                    <button className="icon-btn">
                      <Icon className="red" path={mdiHeadphones} size={0.75} />{" "}
                      547
                    </button>
                    <button className="icon-btn">
                      <Icon className="red" path={mdiHeart} size={0.75} /> 547
                    </button>
                  </div>
                  <button className="subscribe-btn">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="sm-audio-container">
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
                <Icon className="red" path={mdiPlayCircle} size={2.75} />
              </div>
              <button className="rd-btn">
                <Icon className="dark" path={mdiSkipPrevious} size={1.5} />
              </button>
              <button className="rd-btn">
                <Icon className="dark" path={mdiSkipNext} size={1.5} />
              </button>
              <Icon className="red" path={mdiHeart} size={1.5} />
              <Icon className="grey" path={mdiBookmark} size={1.5} />
            </div>
          </div>
          <div className="up-next">
            <h3>Up Next</h3>
            <div className="up-next-cards">
              <div className="hr"></div>
              <div className="up-next-card">
                <img src={img5} alt="" />
                <div>
                  <h3>#12: Small World</h3>
                  <h6>
                    Lorem ipsum dolor sit ame t,consectetur adipiscing elit.
                  </h6>
                  <div className="un-btn-container">
                    <button>
                      <Icon path={mdiPlayCircle} size={0.75} />
                      Listen
                    </button>
                    <p>
                      15mins
                      <Icon
                        style={{ color: "#ff0000" }}
                        path={mdiCircleSmall}
                        size={1}
                      />
                      02 Apr 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="hr"></div>
              <div className="up-next-card">
                <img src={img5} alt="" />
                <div>
                  <h3>#12: Small World</h3>
                  <h6>
                    Lorem ipsum dolor sit ame t,consectetur adipiscing elit.
                  </h6>
                  <div className="un-btn-container">
                    <button className="listen-btn card-btn">
                      <Icon path={mdiPlayCircle} size={0.75} />
                      Listen
                    </button>
                    <p>
                      15mins
                      <Icon
                        style={{ color: "#ff0000" }}
                        path={mdiCircleSmall}
                        size={1}
                      />
                      02 Apr 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="hr"></div>
              <div className="up-next-card">
                <img src={img5} alt="" />
                <div>
                  <h3>#12: Small World</h3>
                  <h6>
                    Lorem ipsum dolor sit ame t,consectetur adipiscing elit.
                  </h6>
                  <div className="un-btn-container">
                    <button className="listen-btn card-btn">
                      <Icon path={mdiPlayCircle} size={0.75} />
                      Listen
                    </button>
                    <p>
                      15mins
                      <Icon
                        style={{ color: "#ff0000" }}
                        path={mdiCircleSmall}
                        size={1}
                      />
                      02 Apr 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="hr"></div>
              <div className="up-next-card">
                <img src={img5} alt="" />
                <div>
                  <h3>#12: Small World</h3>
                  <h6>
                    Lorem ipsum dolor sit ame t,consectetur adipiscing elit.
                  </h6>
                  <div className="un-btn-container">
                    <button className="listen-btn card-btn">
                      <Icon path={mdiPlayCircle} size={0.75} />
                      Listen
                    </button>
                    <p>
                      15mins
                      <Icon
                        style={{ color: "#ff0000" }}
                        path={mdiCircleSmall}
                        size={1}
                      />
                      02 Apr 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="hr"></div>
              <div className="up-next-card">
                <img src={img5} alt="" />
                <div>
                  <h3>#12: Small World</h3>
                  <h6>
                    Lorem ipsum dolor sit ame t,consectetur adipiscing elit.
                  </h6>
                  <div className="un-btn-container">
                    <button className="listen-btn card-btn">
                      <Icon path={mdiPlayCircle} size={0.75} />
                      Listen
                    </button>
                    <p>
                      15mins
                      <Icon
                        style={{ color: "#ff0000" }}
                        path={mdiCircleSmall}
                        size={1}
                      />
                      02 Apr 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="hr"></div>
              <div className="up-next-card">
                <img src={img5} alt="" />
                <div>
                  <h3>#12: Small World</h3>
                  <h6>
                    Lorem ipsum dolor sit ame t,consectetur adipiscing elit.
                  </h6>
                  <div className="un-btn-container">
                    <button className="listen-btn card-btn">
                      <Icon path={mdiPlayCircle} size={0.75} />
                      Listen
                    </button>
                    <p>
                      15mins
                      <Icon
                        style={{ color: "#ff0000" }}
                        path={mdiCircleSmall}
                        size={1}
                      />
                      02 Apr 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="hr"></div>
              <div className="up-next-card">
                <img src={img5} alt="" />
                <div>
                  <h3>#12: Small World</h3>
                  <h6>
                    Lorem ipsum dolor sit ame t,consectetur adipiscing elit.
                  </h6>
                  <div className="un-btn-container">
                    <button className="listen-btn card-btn">
                      <Icon path={mdiPlayCircle} size={0.75} />
                      Listen
                    </button>
                    <p>
                      15mins
                      <Icon
                        style={{ color: "#ff0000" }}
                        path={mdiCircleSmall}
                        size={1}
                      />
                      02 Apr 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="hr"></div>
              <div className="up-next-card">
                <img src={img5} alt="" />
                <div>
                  <h3>#12: Small World</h3>
                  <h6>
                    Lorem ipsum dolor sit ame t,consectetur adipiscing elit.
                  </h6>
                  <div className="un-btn-container">
                    <button className="listen-btn card-btn">
                      <Icon path={mdiPlayCircle} size={0.75} />
                      Listen
                    </button>
                    <p>
                      15mins
                      <Icon
                        style={{ color: "#ff0000" }}
                        path={mdiCircleSmall}
                        size={1}
                      />
                      02 Apr 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="hr"></div>
              <div className="up-next-card">
                <img src={img5} alt="" />
                <div>
                  <h3>#12: Small World</h3>
                  <h6>
                    Lorem ipsum dolor sit ame t,consectetur adipiscing elit.
                  </h6>
                  <div className="un-btn-container">
                    <button className="listen-btn card-btn">
                      <Icon path={mdiPlayCircle} size={0.75} />
                      Listen
                    </button>
                    <p>
                      15mins
                      <Icon
                        style={{ color: "#ff0000" }}
                        path={mdiCircleSmall}
                        size={1}
                      />
                      02 Apr 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="hr"></div>
              <div className="up-next-card">
                <img src={img5} alt="" />
                <div>
                  <h3>#12: Small World</h3>
                  <h6>
                    Lorem ipsum dolor sit ame t,consectetur adipiscing elit.
                  </h6>
                  <div className="un-btn-container">
                    <button className="listen-btn card-btn">
                      <Icon path={mdiPlayCircle} size={0.75} />
                      Listen
                    </button>
                    <p>
                      15mins
                      <Icon
                        style={{ color: "#ff0000" }}
                        path={mdiCircleSmall}
                        size={1}
                      />
                      02 Apr 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="hr"></div>
            </div>
          </div>
        </div>
        <h2> Recommended For You</h2>
        <div className="sport-cards-container">
          <div className="recommended-card">
            <img src={img1} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="recommended-card">
            <img src={img1} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="recommended-card">
            <img src={img2} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="recommended-card">
            <img src={img1} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="recommended-card">
            <img src={img1} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="recommended-card">
            <img src={img1} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="recommended-card">
            <img src={img1} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="recommended-card">
            <img src={img3} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="recommended-card">
            <img src={img1} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="recommended-card">
            <img src={img1} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="recommended-card">
            <img src={img3} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="recommended-card">
            <img src={img4} alt="Pain - Ryan Jones" />
            <h3>#12: Small World</h3>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
