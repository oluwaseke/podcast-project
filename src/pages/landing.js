import "./landing.scss";

import FavouritePodcasts from "../PageLayout/favourite";
import GetStarted from "../PageLayout/getstarted";
import Hero from "../PageLayout/hero";
import Nav from "../PageLayout/Nav";
import Podcasts from "../PageLayout/Podcasts";

export default function Landing() {
  return (
    <>
      <Nav />
      <div className="landing-container">
        <Hero />
        <FavouritePodcasts />
        <GetStarted />
        <Podcasts />
      </div>
    </>
  );
}
