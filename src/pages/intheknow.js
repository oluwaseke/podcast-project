import "./intheknow.scss";

import Footer from "../PageLayout/footer";
import Icon from "@mdi/react";
import Nav from "../PageLayout/Nav";
import img1 from "../assets/image 3.png";
import img2 from "../assets/image 4.png";
import img3 from "../assets/image 5.png";
import img4 from "../assets/image 6.png";
import img5 from "../assets/image 7.png";
import { mdiAccountCircle } from "@mdi/js";
import { mdiHeart } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";
import { mdiPodcast } from "@mdi/js";

export default function InTheKnow() {
  return (
    <>
      <Nav />
      <div className="content-wrapper">
        <div className="header-container">
          <div className="fashion-container">
            <div className="red-bar"></div>
            <div className="header-img"></div>
            <div className="fashion-trend">
              <h1>Fashion Trend</h1>
              <h4>With Dreyman</h4>
              <button> Subscribe</button>
            </div>
          </div>
          <div className="header-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
              cras consequat, ut amet ultrices purus enim accumsan. Nisl
              hendrerit pulvinar ac odio habitasse neque, tortor, sed auctor.
              Pellentesque in non arcu ac diam etiam interdum pharetra eu.
              Mattis a neque donec etiam pulvinar in. Eget sed in ac id. Aliquam
              senectus morbi enim donec congue vitae vivamus magna fermentum.
              Orci neque feugiat neque tellus eget risus nunc, et elit. At ac
              vulputate blandit sem odio.
            </p>
            <div className="icons">
              <button>
                <Icon className="red" path={mdiPodcast} size={0.75} />
                547
              </button>
              <button>
                <Icon className="red" path={mdiAccountCircle} size={0.75} />
                547
              </button>
              <button>
                <Icon className="red" path={mdiHeart} size={0.75} />
                547
              </button>
            </div>
          </div>
        </div>
        <div className="cards-container">
          <div className="card">
            <img src={img1} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img2} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img3} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img4} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img5} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img3} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img1} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img2} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img3} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img4} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img5} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img3} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img1} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img2} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img3} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img4} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img5} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
            <h6>Lorem ipsum dolor sit ame t,consectetur adipiscing elit.</h6>
            <p>15mins &emsp; &emsp; 02 Apr 2020</p>
            <button>
              <Icon path={mdiPlayCircle} size={0.75} />
              Listen
            </button>
          </div>
          <div className="card">
            <img src={img3} alt="Pain - Ryan Jones" />
            <h5>#12: Small World</h5>
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
