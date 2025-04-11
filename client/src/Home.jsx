import React from "react";
import AboutUs from "./components/sections/AboutUs";

import Footer from "./components/Footer";
import Sponsors from "./components/sections/Sponsors";
import HeroSection from "./components/HeroSection";

function Home() {
  return (
    <div className="min-h-screen ">
      <HeroSection />

      <AboutUs />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
