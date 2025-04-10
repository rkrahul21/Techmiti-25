import React from "react";
import videoSrc from "./assets/88fcbfc0.mp4";
import AboutUs from "./components/sections/AboutUs";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Sponsor from "./components/sections/Sponsors";

function Home() {
  return (
    <div min-h-screen bg-black>
      <Countdown />
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={videoSrc}
          autoPlay
          muted
          playsInline
        />
      </div>
      <AboutUs />
      <Sponsor />
      <Footer />
    </div>
  );
}

export default Home;
