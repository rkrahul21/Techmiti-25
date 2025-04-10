import React from "react";
import AboutUs from "./components/sections/AboutUs";
import Sponsor from "./components/sections/Sponsors";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function Home() {
  return (
    <div min-h-screen bg-black>
      <HeroSection />

      <AboutUs />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
