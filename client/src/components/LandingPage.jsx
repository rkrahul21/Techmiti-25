// import React, { useEffect, useState, useRef } from 'react';
// import videoSrc from '/88fcbfc0.mp4';

const LandingPage = () => {
  return (
    <>
      <div className="bg-blue-900 text-white flex flex-col items-center justify-center h-screen">
        <h1>TECHMIT'25</h1>
        <h3>Coming Soon</h3>
        <Countdown />
      </div>

      <div>
        {/* {events.map((event, index) => (
          <div key={index} className='bg-blue-900 text-white flex flex-col items-center justify-center'>
            <h1 className='bg-yellow-500 m-2 p-2 rounded-md shadow-lg'>{event}</h1>
          </div>
        ))} */}
      </div>
    </>
  );
}

export default LandingPage;