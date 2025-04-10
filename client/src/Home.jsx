import React from "react";
import AboutUs from "./components/sections/AboutUs";

import Footer from "./components/Footer";
import Sponsor from "./components/sections/Sponsor";
import HeroSection from "./components/HeroSection";

function Home() {
  return (
    <div min-h-screen bg-black>
      <HeroSection />

      <AboutUs />
      <Sponsor />
      <Footer />
    </div>
  );
}

export default Home;
