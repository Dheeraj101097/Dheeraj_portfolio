import React from "react";
import { motion } from "framer-motion";
import { Mail, Newspaper } from "lucide-react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpg";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Create a seamless loop of images
  const baseImages = [img1, img2, img3, img4];
  const marqueeImages = [
    ...baseImages,
    ...baseImages,
    ...baseImages,
    ...baseImages,
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      {/* Enhanced Background Elements (High Voltage Theme) */}
      <div className="absolute inset-0 z-0">
        {/* Blob 1: Primary (Blue) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-500/20 to-primary-800/20 rounded-full blur-3xl"
        />
        {/* Blob 2: Secondary (Copper) */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-secondary-500/20 to-secondary-700/20 rounded-full blur-3xl"
        />
        {/* Blob 3: Accent (Cyan) */}
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-accent-500/15 to-accent-700/15 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl h-fit mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* NAME TITLE */}
            <motion.h1
              className="text-5xl md:text-7xl font-medium mb-6 mt-16 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent pt-8"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(59, 130, 246, 0)", // Primary Blue
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 0px rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Dheeraj Patnaik
              </motion.span>
            </motion.h1>

            {/* JOB TITLE */}
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {"Aspiring "}
              <motion.span
                animate={{
                  // Cycle: Primary(Blue) -> Accent(Cyan) -> Secondary(Copper)
                  color: ["#3b82f6", "#06b6d4", "#f59e0b", "#3b82f6"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Embedded
              </motion.span>
              {" & "}
              <motion.span
                animate={{
                  // Cycle Offset: Secondary(Copper) -> Primary(Blue) -> Accent(Cyan)
                  color: ["#f59e0b", "#3b82f6", "#06b6d4", "#f59e0b"],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 3 }}
              >
                IoT
              </motion.span>
              {" Engineer"}
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            <motion.span
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              Building the next generation of smart, secure, and connected
              devices. Specializing in Embedded Systems, Edge AI, and IoT
              Solutions.
            </motion.span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* BUTTON 1: Primary (Blue -> Cyan Gradient) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-48 h-14 border-2 border-transparent bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-2xl font-semibold shadow-lg flex items-center justify-center gap-2"
            >
              <Newspaper size={20} />
              <span>View Resume</span>
            </motion.button>

            {/* BUTTON 2: Ghost (Copper Highlight on Hover) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              // Default: Primary Border. Hover: Copper Border/Text + Glow
              className="w-48 h-14 border-2 border-primary-600 text-primary-600 dark:text-gray-300 bg-transparent rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:border-secondary-500 hover:text-secondary-500 hover:bg-secondary-500/10 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </motion.button>
          </motion.div>

          {/* VISUAL HIGHLIGHTS / GALLERY */}
          <div className="w-full px-4 sm:px-6 lg:px-8 my-12">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800"
              >
                {/* Copper Dot */}
                <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] text-primary-700 dark:text-primary-300 uppercase">
                  Visual Highlights
                </span>
              </motion.div>
            </div>

            <div className="bg-transparent rounded-3xl p-4 overflow-hidden relative max-w-7xl mx-auto">
              {/* Fade Gradients */}
              <div className="absolute inset-y-0 left-0 w-8 sm:w-32 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 sm:w-32 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none" />

              {/* Image Track */}
              <motion.div
                className="flex gap-4 sm:gap-8"
                animate={{ x: [`0%`, `-50%`] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {marqueeImages.map((src, idx) => (
                  <motion.div
                    key={idx}
                    className="relative flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border border-white/10 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${idx}`}
                      className="w-[85vw] h-64 sm:w-96 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Navigation Arrows */}
              <button className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full p-3 shadow-lg hover:bg-white/20 transition-all z-20">
                ‹
              </button>
              <button className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full p-3 shadow-lg hover:bg-white/20 transition-all z-20">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
