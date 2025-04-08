import { motion } from "framer-motion";
import React from "react";


export default function AboutUs() {

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      className="w-full h-auto mt-8 mb-12 p-1 md:p-6 bg-gradient-to-br from-slate-800 to-blue-900 rounded-xl shadow-xl overflow-hidden relative"
      whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -right-20 -top-20 w-56 h-56 bg-blue-300/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      ></motion.div>
      <motion.div 
        className="absolute -left-20 -bottom-20 w-56 h-56 bg-blue-300/10 rounded-full blur-xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2 
        }}
      ></motion.div>
      
      {/* Floating particles */}
      <motion.div 
        className="absolute top-10 right-[20%] w-2 h-2 rounded-full bg-blue-400/40"
        animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 left-[30%] w-3 h-3 rounded-full bg-blue-300/40"
        animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      ></motion.div>
      <motion.div 
        className="absolute top-[40%] right-[30%] w-2 h-2 rounded-full bg-indigo-300/40"
        animate={{ y: [0, -25, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      ></motion.div>
      
      <div className="w-full flex-col p-8 md:p-10 text-white relative z-10">
        <motion.div 
          className="relative inline-block mx-auto md:mx-0"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1 className="text-[34px] font-bold md:text-[50px] md:justify-center bg-gradient-to-r from-blue-100 to-white text-transparent bg-clip-text mb-6">
            About Us
            <motion.span 
              className="block md:mx-auto w-32 md:w-48 h-1 bg-gradient-to-r from-blue-300 to-transparent rounded-full mt-1"
              animate={{ width: ["30%", "100%", "30%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.span>
          </h1>

          
        <motion.div 
          className="bg-[url(https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww)] bg-no-repeat bg-cover w-full h-[250px] text-[20px] mt-6 leading-relaxed backdrop-blur-sm bg-slate-800/30 p-6 rounded-lg border border-blue-900/30 text-justify flex items-center justify-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ 
            backgroundColor: "rgba(30, 41, 59, 0.4)",
            borderColor: "rgba(30, 58, 138, 0.4)"
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
           className="bg-black/20 rounded-md shadow-md p-4 text-justify  py-8 w-[80%]">
            TechMITi'25 is the annual science and technology festival of MIT Muzaffarpur, which is organized by Moxie-The Technical Club that is going to be held on 14th-16th May 2025 in fully offline mode. TechMITi comprises a diverse array of competitive technical events, exhibitions, workshops, and guest speakers that attract the participation of students from engineering institutes all across the nation. The 3-day fest congregation is expected to have 4,000+ footprints gathering from various technical institutes to participate in and witness the TechMITi.
            <br />
            
          </motion.p>
          
          
          
        </motion.div>
        </motion.div>
        

       
      </div>
    </motion.div>
  );
}
