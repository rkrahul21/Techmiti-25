import React from 'react'
import videoSrc from './assets/88fcbfc0.mp4';
import AboutUs from './components/sections/AboutUs';
import Countdown from './components/Countdown';



function Home() {
    return (
        <div>

            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
            <Countdown />
            <AboutUs />
        </div>
    )
}

export default Home