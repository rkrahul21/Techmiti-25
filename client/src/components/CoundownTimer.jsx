import React from "react";
import { useState, useEffect } from "react";

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
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Gradient Border Frame */}
      <div className="relative">
        <div className="absolute -inset-[2px] bg-gradient-to-r from-techmiti-purple/60 via-techmiti-cyan/60 to-techmiti-purple/60 rounded-xl opacity-50"></div>

        {/* Main Content */}
        <div className="relative bg-black/30 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <div className="absolute top-1/4 -left-4 w-24 h-24 bg-techmiti-purple/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-4 w-24 h-24 bg-techmiti-cyan/10 rounded-full blur-xl animate-pulse delay-700"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-white">
              Event Starts In
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { value: timeLeft.days, label: "DAYS" },
                { value: timeLeft.hours, label: "HOURS" },
                { value: timeLeft.minutes, label: "MINUTES" },
                { value: timeLeft.seconds, label: "SECONDS" },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  {/* Card Gradient Border - Balanced visibility */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-techmiti-purple/50 to-techmiti-cyan/50 rounded-lg opacity-40 group-hover:opacity-70 blur-[0.5px] transition-all duration-500"></div>

                  {/* Card Content - Balanced visibility */}
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center transform transition-all duration-300 group-hover:scale-[1.02] border border-white/10 shadow-[0_0_10px_rgba(0,242,254,0.15)] group-hover:shadow-[0_0_15px_rgba(0,242,254,0.25)]">
                    {/* Subtle glow effect behind the number */}
                    <div className="absolute inset-0 bg-gradient-to-b from-techmiti-cyan/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-techmiti-cyan/90 mb-1 sm:mb-2 drop-shadow-[0_0_3px_rgba(0,242,254,0.3)]">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-200 uppercase tracking-wider font-medium">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6 text-gray-300 text-sm sm:text-base">
              <p>Join us for an unforgettable experience at TECHMITI'25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
