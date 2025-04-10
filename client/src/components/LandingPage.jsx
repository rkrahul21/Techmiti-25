// import React, { useEffect, useState, useRef } from 'react';
// import videoSrc from '/88fcbfc0.mp4';
// src/components/LandingPage.jsx
import React from 'react';
import videoSrc from '../assets/88fcbfc0.mp4';

const LandingPage = () => {
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
        <h1 className="text-4xl font-bold mt-4">TECHMIT'25</h1>
        <h3 className="text-xl mt-2">Coming Soon</h3>
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
