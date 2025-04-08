import React, { useEffect, useState, useRef } from 'react';

const Countdown = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-05-14T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-center flex flex-col justify-center items-center">

      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0  h-full object-cover z-0 w-screen "
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={() => setVideoLoaded(true)}
        
      >
        <source src="/8ef34bf2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>



      {/* Preloader */}
      {!videoLoaded && (
        <div className="absolute top-0 left-0 w-full h-full bg-black flex justify-center items-center z-10">
          <div className="w-16 h-16 border-4 border-white border-t-purple-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Main Content */}
      <div className="space-y-6 py-10 z-10">
        <p className="text-3xl md:text-5xl lg:text-6xl text-purple-400 tracking-wide font-[sans-serif]">
          14th May, 2025
        </p>
        <p className="text-xl md:text-3xl lg:text-4xl text-white/90 tracking-wide font-[sans-serif]">
          EXCITEMENT IS BREWING. ARE YOU IN?
        </p>

        {/* Register Button */}
        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1c2hxvvyRGOY_v1XBHmGgf1PPgaBTGGMN/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition inline-block"
          >
            Register Now
          </a>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 px-4">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="backdrop-blur-sm bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/10"
            >
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-[sans-serif]">
                {item.value}
              </span>
              <span className="text-sm md:text-base text-purple-300 mt-2 font-[sans-serif]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
