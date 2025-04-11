// import React, { useEffect, useState, useRef } from 'react';
// import videoSrc from '/88fcbfc0.mp4';
// src/components/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import videoSrc from "../assets/88fcbfc0.mp4";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content on top of video */}
      <div className="bg-blue-900 bg-opacity-50 text-white flex flex-col items-center justify-center h-full">
        <Countdown />
        <h1 className="text-4xl md:text-6xl font-bold mt-4 font-['Orbitron']">
          TECHMIT'<span className="text-[#00f2fe]">25</span>
        </h1>
        <h3 className="text-xl md:text-2xl mt-2 mb-8">Coming Soon</h3>

        {/* Register Button */}
        <button
          onClick={handleRegisterClick}
          className="relative group px-8 py-3 mt-6"
        >
          <div className="absolute -inset-[2px] bg-gradient-to-r from-[#6a75f7] via-[#00f2fe] to-[#6a75f7] rounded-lg opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative bg-black/50 backdrop-blur-sm px-6 py-3 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6a75f7]/20 via-[#00f2fe]/20 to-[#6a75f7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-[#00f2fe] transition-colors text-lg font-medium">
              Register Now
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </button>
      </div>

      <div>
        {/* {events.map((event, index) => (
          <div key={index} className='bg-blue-900 text-white flex flex-col items-center justify-center'>
            <h1 className='bg-yellow-500 m-2 p-2 rounded-md shadow-lg'>{event}</h1>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default LandingPage;
