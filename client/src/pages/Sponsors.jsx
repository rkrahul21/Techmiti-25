import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Handshake, Trophy } from "lucide-react";

const sponsorData = {
  "Title Sponsor": [
    {
      name: "MitMII",
      image: "/images/mit_logo.png", // Updated path to correct image location
      description: "US Tech Company",
    },
  ],
  "Associate Sponsors": [
    {
      name: "Tech Corp",
      image: "/images/mit_logo.png", // Using the same image for demonstration
      description: "Innovation Partner",
    },
    {
      name: "Future Systems",
      image: "/images/mit_logo.png", // Using the same image for demonstration
      description: "Technology Solutions",
    },
  ],
  Partners: [
    {
      name: "Digital Solutions",
      image: "/images/mit_logo.png", // Using the same image for demonstration
      description: "Digital Partner",
    },
    {
      name: "Cloud Tech",
      image: "/images/mit_logo.png", // Using the same image for demonstration
      description: "Cloud Partner",
    },
    {
      name: "Innovate Hub",
      image: "/images/mit_logo.png", // Using the same image for demonstration
      description: "Innovation Partner",
    },
  ],
  "Event Sponsors": [
    {
      name: "GameTech",
      image: "/images/mit_logo.png", // Using the same image for demonstration
      description: "Gaming Events Partner",
    },
    {
      name: "RoboTech",
      image: "/images/mit_logo.png", // Using the same image for demonstration
      description: "Robotics Events Partner",
    },
    {
      name: "CodeHub",
      image: "/images/mit_logo.png", // Using the same image for demonstration
      description: "Coding Events Partner",
    },
    {
      name: "TechLabs",
      image: "/images/mit_logo.png", // Using the same image for demonstration
      description: "Technical Events Partner",
    },
  ],
};

const iconMap = {
  "Title Sponsor": Trophy,
  "Associate Sponsors": Star,
  Partners: Handshake,
  "Event Sponsors": Award,
};

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-[#0f0c29] text-white relative">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover opacity-20 z-0"
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-12 h-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold relative group">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-blue-500 group-hover:bg-[length:200%_auto] group-hover:animate-gradient-pulse transition-all duration-500">
                  Our Sponsors
                </span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
              </h1>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 rounded-full blur"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 relative">
              &lt;Meet the partners who make{" "}
              <span className="text-cyan-400"><span class="text-1xl font-bold ml-2 group inline-block">
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500">Tech</span>
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFA500] group-hover:to-[#FF8C00] transition-all duration-500">MIT</span>
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500">i'25</span>
          </span></span> possible /&gt;
            </p>
          </div>
        </motion.div>

        {/* Sponsors Sections */}
        <div className="space-y-16">
          {Object.entries(sponsorData).map(
            ([category, sponsors], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="flex flex-col items-center mb-16 w-full"
              >
                <div className="flex items-center justify-center mb-8">
                  {React.createElement(iconMap[category], {
                    className: "w-8 h-8 text-cyan-400 mr-3",
                  })}
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full place-items-center">
                  {sponsors.map((sponsor, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ translateY: -5 }}
                      className={`w-full ${
                        category === "Title Sponsor"
                          ? "max-w-lg col-span-full"
                          : category === "Associate Sponsors"
                          ? "max-w-md"
                          : "max-w-sm"
                      }`}
                    >
                      <div
                        className="bg-[rgba(28,28,39,0.75)] backdrop-blur-[10px] rounded-[20px] p-6 border border-white/10 
                                shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden transition-all duration-300
                                hover:border-white/20 group"
                      >
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-[rgba(79,172,254,0.1)] to-[rgba(0,242,254,0.1)]
                                  opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        ></div>
                        <div className="relative z-10">
                          <div className="w-full h-40 overflow-hidden rounded-lg mb-4 flex items-center justify-center bg-black/20">
                            <img
                              src={sponsor.image}
                              alt={sponsor.name}
                              className="max-w-full max-h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 text-center">
                            {sponsor.name}
                          </h3>
                          <p className="text-gray-300 text-center">
                            {sponsor.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
