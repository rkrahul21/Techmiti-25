import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const Brochure = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredCaRulebook, setIsHoveredCaRulebook] = useState(false);

  const handleDownload = () => {
    window.open(
      // "https://drive.google.com/file/d/1c2hxvvyRGOY_v1XBHmGgf1PPgaBTGGMN/view",
      // "_blank"
      "/"
    );
  };

  const handleDownloadCaRulebook = () => {
    window.open(
      "https://drive.google.com/file/d/1BHlCLNN5PXBU7wC0gSR--cuc_rR_T5vd/view?usp=sharing",
      "_blank"
    
    );
  };

  return (
    <div className="min-h-screen bg-[#0f0c29] text-white relative flex items-center justify-center">
      {/* Background Video - matching homepage style */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover opacity-20 z-0"
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[80vh] space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <FileText className="w-12 h-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold relative group">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-blue-500 group-hover:bg-[length:200%_auto] group-hover:animate-gradient-pulse transition-all duration-500">
                     Event Brochure
                </span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
              </h1>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 rounded-full blur"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto relative">
              &lt;Download the official{" "}
              <span className="text-cyan-400"><span class="text-1xl font-bold ml-2 group inline-block">
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500">Tech</span>
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFA500] group-hover:to-[#FF8C00] transition-all duration-500">MIT</span>
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500">i'25</span>
          </span></span> brochure for
              detailed event information /&gt;
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`inline-flex items-center justify-center px-8 py-3 rounded-full backdrop-blur-sm cursor-pointer transition-all duration-300 min-w-[180px] relative group ${
            isHovered
              ? "bg-gradient-to-r from-purple-600 to-cyan-500 shadow-lg shadow-purple-500/30"
              : "bg-gradient-to-r from-purple-600/30 to-cyan-500/30"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleDownload}
        >
          {/* Decorative dots */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400/50"></div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400/50"></div>

          <span
            className={`text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 ${
              isHovered
                ? "text-white"
                : "bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            }`}
          >
            {isHovered ? (
              <>
                <span className="font-mono">&lt;</span>
                Download Brochure
                <span className="font-mono">/&gt;</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </>
            ) : (
              <div className="flex items-center justify-center w-full">
                <FileText className="h-5 w-5 mr-2" />
                <span className="font-mono">&lt;</span>
                Brochure
                <span className="font-mono">/&gt;</span>
              </div>
            )}
          </span>
        </motion.div>

        {/* second button CA Rulebook */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`inline-flex items-center justify-center px-8 py-3 rounded-full backdrop-blur-sm cursor-pointer transition-all duration-300 min-w-[180px] relative group ${
            isHoveredCaRulebook
              ? "bg-gradient-to-r from-purple-600 to-cyan-500 shadow-lg shadow-purple-500/30"
              : "bg-gradient-to-r from-purple-600/30 to-cyan-500/30"
          }`}
          onMouseEnter={() => setIsHoveredCaRulebook(true)}
          onMouseLeave={() => setIsHoveredCaRulebook(false)}
          onClick={handleDownloadCaRulebook}
        >
          {/* Decorative dots */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400/50"></div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400/50"></div>

          <span
            className={`text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 ${
              isHoveredCaRulebook
                ? "text-white"
                : "bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            }`}
          >
            {isHoveredCaRulebook ? (
              <>
                <span className="font-mono">&lt;</span>
                Download CA RuleBook
                <span className="font-mono">/&gt;</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </>
            ) : (
              <div className="flex items-center justify-center w-full">
                <FileText className="h-5 w-5 mr-2" />
                <span className="font-mono">&lt;</span>
                CA RuleBook
                <span className="font-mono">/&gt;</span>
              </div>
            )}
          </span>
        </motion.div>
      </div>

       


    </div>
  );
};

export default Brochure;
