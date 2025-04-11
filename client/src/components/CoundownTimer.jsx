import React from "react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the event date to May 14, 2025
    const eventDate = new Date("May 14, 2025 09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      // Calculate time
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // If the countdown is finished
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-3 py-2 sm:py-3">
      {/* Gradient Border Frame */}
      <div className="relative">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-techmiti-purple/60 via-techmiti-cyan/60 to-techmiti-purple/60 rounded-lg opacity-50"></div>

        {/* Main Content */}
        <div className="relative bg-black/30 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-white/10">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute top-1/4 -left-3 w-12 h-12 bg-techmiti-purple/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-3 w-12 h-12 bg-techmiti-cyan/10 rounded-full blur-xl animate-pulse delay-700"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-center mb-2 sm:mb-3 text-white">
              Event Starts In
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
              {[
                { value: timeLeft.days, label: "DAYS" },
                { value: timeLeft.hours, label: "HOURS" },
                { value: timeLeft.minutes, label: "MINUTES" },
                { value: timeLeft.seconds, label: "SECONDS" },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  {/* Card Gradient Border - Balanced visibility */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-techmiti-purple/50 to-techmiti-cyan/50 rounded-md opacity-40 group-hover:opacity-70 blur-[0.5px] transition-all duration-500"></div>

                  {/* Card Content - Balanced visibility */}
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-md p-1.5 sm:p-2 text-center transform transition-all duration-300 group-hover:scale-[1.02] border border-white/10 shadow-[0_0_10px_rgba(0,242,254,0.15)] group-hover:shadow-[0_0_15px_rgba(0,242,254,0.25)]">
                    {/* Subtle glow effect behind the number */}
                    <div className="absolute inset-0 bg-gradient-to-b from-techmiti-cyan/5 to-transparent rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-techmiti-cyan/90 mb-0.5 drop-shadow-[0_0_3px_rgba(0,242,254,0.3)]">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-[7px] sm:text-[9px] md:text-xs text-gray-200 uppercase tracking-wider font-medium">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-2 sm:mt-3 text-gray-300 text-[10px] sm:text-xs">
              <p>Join us for an unforgettable experience at TECHMITI'25</p>
            </div>

            {/* Action Buttons */}
            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-2 md:gap-3">
              <Button className="w-full sm:w-auto text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] hover:from-[#2B86C5] hover:via-[#784BA0] hover:to-[#FF3CAC] shadow-lg hover:shadow-[#FF3CAC]/30 transition-all duration-500 transform hover:scale-105 relative group overflow-hidden rounded-lg border-2 border-transparent hover:border-white/20">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF3CAC]/20 to-[#2B86C5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center justify-center font-bold tracking-wide">
                  Explore All Events
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-3 md:w-3 ml-1 transform group-hover:translate-x-2 transition-transform duration-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 border-2 border-[#00F5A0] text-[#00F5A0] hover:bg-[#00F5A0]/10 shadow-lg hover:shadow-[#00F5A0]/30 transition-all duration-500 transform hover:scale-105 relative group overflow-hidden rounded-lg hover:border-[#00F5A0]/80"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00F5A0]/10 to-[#00D9F5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#00F5A0]/5 to-[#00D9F5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center justify-center font-bold tracking-wide">
                  Register Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-3 md:w-3 ml-1 transform group-hover:translate-x-2 transition-transform duration-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </span>
              </Button>
            </div>

            {/* Down Arrow - Visible only on small devices */}
            <div className="mt-2 sm:hidden flex justify-center">
              <a
                href="#about"
                className="text-white/70 hover:text-white animate-bounce inline-block"
                aria-label="Scroll to About section"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow - Visible only on large devices */}
      <div className="hidden sm:flex justify-center mt-2">
        <a
          href="#about"
          className="text-white/70 hover:text-white animate-bounce inline-block"
          aria-label="Scroll to About section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            className="w-6 h-6 md:w-8 md:h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </a>
      </div>
    </div>
  );
}
