import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  ChevronDown,
  Sparkles,
  Code,
  Zap,
  Newspaper,
} from "lucide-react";
import { Paper } from "@mui/material";
const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating icons animation
  const floatingIcons = [
    { icon: <Code className="w-6 h-6" />, delay: 0 },
    { icon: <Zap className="w-5 h-5" />, delay: 0.5 },
    { icon: <Sparkles className="w-4 h-4" />, delay: 1 },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
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
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl"
        />
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-5">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-indigo-400/30"
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-medium mb-6 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent p-2"
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
                    "0 0 0px rgba(99, 102, 241, 0)",
                    "0 0 20px rgba(99, 102, 241, 0.5)",
                    "0 0 0px rgba(99, 102, 241, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Dheeraj Patnaik
              </motion.span>
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                animate={{
                  color: ["#6366F1", "#06B6D4", "#10B981", "#6366F1"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Aspiring Electronics Engineer
              </motion.span>
              {" & "}
              <motion.span
                animate={{
                  color: ["#10B981", "#6366F1", "#06B6D4", "#10B981"],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                Full-Stack Developer
              </motion.span>
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Passionate about creating innovative solutions that bridge the gap
              between hardware and software.
            </motion.span>
            <br />
            <motion.span
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              {/* I specialize in developing cutting-edge applications using modern
              technologies while exploring the fascinating world of electronics in Embedded
              and IoT systems. */}
              I specialize in building cutting-edge applications with modern
              technologies, while exploring the world of Embedded and IoT
              systems.
            </motion.span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              > */}
              <Newspaper size={20} />
              {/* </motion.div> */}
              <span className="relative z-10">View Resume</span>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: "#06B6D4",
                color: "#06B6D4",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 rounded-2xl font-semibold hover:bg-indigo-500 hover:text-white dark:hover:text-white transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
            >
              <motion.div whileHover={{ scale: 1.2 }} className="relative z-10">
                <Mail size={20} />
              </motion.div>
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            {/* <motion.button
              onClick={() => scrollToSection("#education")}
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.2,
                color: "#06B6D4",
              }}
              className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 relative"
            >
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <ChevronDown size={32} />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full bg-indigo-500/20"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
