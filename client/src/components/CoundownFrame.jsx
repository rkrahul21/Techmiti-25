import { useState, useEffect } from "react";

export default function CountdownFrame() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date("2025-02-14T00:00:00"); // Set your event date here
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      {/* Gradient Border Frame */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-techmiti-purple via-techmiti-cyan to-techmiti-purple rounded-xl opacity-75"></div>

      {/* Main Content */}
      <div className="relative bg-background/40 backdrop-blur-xl rounded-xl p-8 border border-white/10">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <div className="absolute top-1/4 -left-4 w-24 h-24 bg-techmiti-purple/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-4 w-24 h-24 bg-techmiti-cyan/20 rounded-full blur-xl animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="text-white">Event Starts In</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-techmiti-purple to-techmiti-cyan rounded-lg opacity-50 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                <div className="relative bg-background/60 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-techmiti-cyan mb-2">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-300">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 text-gray-400">
            <p>Join us for an unforgettable experience at TECHMITI'25</p>
          </div>
        </div>
      </div>
    </div>
  );
}
