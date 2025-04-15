import React from "react";
import { motion } from "framer-motion";
import { Image } from "lucide-react";
import GlimpseData from "../constant/GlimpseData";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#0f0c29] text-white relative">
      {/* Background Video - matching homepage style */}
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
          className="text-center w-full max-w-4xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Image className="w-12 h-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold relative group">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-blue-500 group-hover:bg-[length:200%_auto] group-hover:animate-gradient-pulse transition-all duration-500">
                Event Gallery
                </span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
              </h1>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 rounded-full blur"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto relative">
              &lt;Take a look at the amazing moments from{" "}
              <span className="text-cyan-400"><span class="text-1xl font-bold ml-2 group inline-block">
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500">Tech</span>
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFA500] group-hover:to-[#FF8C00] transition-all duration-500">MIT</span>
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500">i</span>
          </span></span> events /&gt;
            </p>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GlimpseData.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={`Gallery image ${image.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
