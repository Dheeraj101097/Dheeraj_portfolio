import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Zap,
  Smartphone,
  Globe,
  Star,
  Eye,
  Leaf,
  Shield,
  Cpu,
} from "lucide-react";
import pis from "../assets/pis.png";
import foodapp from "../assets/foodapp.png";
import floods from "../assets/floods.png";
import dssat from "../assets/dssat.png";
import risd from "../assets/risd.png";
import riceg from "../assets/riceg.png";
const Projects = () => {
  const projects = [
    {
      title: "RIS Control Dashboard (ESP32)",
      description:
        "An embedded web server hosted entirely on an ESP32 to control Reconfigurable Intelligent Surfaces (RIS). Features a responsive UI served via SPIFFS, real-time pattern visualization using WebSockets, and secure Wi-Fi provisioning for seamless hardware-software integration.",
      image: risd,
      tech: ["ESP32", "C++", "WebSocket", "HTML/CSS", "SPIFFS"],
      github: "https://github.com/Dheeraj101097", // Add actual link if available
      live: "#",
      icon: <Cpu className="w-8 h-8" />,
      category: "IoT",
      featured: false,
    },
    {
      title: "Post-Quantum Crypto Benchmarking",
      description:
        "A comparative benchmarking framework evaluating NIST PQC standards (ML-DSA vs. FN-DSA) on resource-constrained ESP32 devices. Measured computational latency, energy efficiency, to guide the secure migration of IoT infrastructure.",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["C", "Python", "ESP32", "liboqs", "Cryptography", "FreeRTOS"],
      github: "https://github.com/Dheeraj101097", // Add actual link if availableand bandwidth overhead
      live: "#",
      icon: <Shield className="w-8 h-8" />, // Make sure to import Shield from lucide-react
      category: "Security",
      featured: false,
    },
    {
      title: "Predictive Irrigation System",
      description:
        "IoT-based smart irrigation system with real-time monitoring, Edge AI, and LoRa integration, achieving 97% model accuracy to optimize water usage and crop yield through automated, data-driven pump control.",
      image: pis,
      tech: ["React", "Node.js", "ESP32", "MQTT", "MongoDB", "WebSocket"],
      github: "https://github.com/Dheeraj101097/Irrigo-codefinity.git",
      live: "https://irrigo-codefinity.vercel.app/",
      icon: <Smartphone className="w-8 h-8" />,
      category: "IoT",
      featured: false,
    },
    {
      title: "Soybean Yield Prediction Framework",
      description:
        "A hybrid research framework combining the DSSAT-Pythia crop simulation model with a CNN-LSTM deep learning network. Calibrated using remote sensing and NASA POWER weather data to generate high-resolution yield estimates for Bundelkhand, India, achieving 98% prediction accuracy (R²).",
      image: dssat,
      tech: ["Python", "DSSAT", "Pythia", "Remote Sensing"],
      github: "https://github.com/Dheeraj101097", // Add actual link if available
      live: "#",
      icon: <Leaf className="w-8 h-8" />, // Make sure to import Leaf from lucide-react
      category: "ML/AI",
      featured: false,
    },
    {
      title: "FloodSense - Flood Monitoring System",
      description:
        "FloodSense is a patented IoT-based system using Jetson Nano for edge processing. It monitors underpasses in real-time, detects floods & potholes, sends alerts via Firebase, providing alternate route suggestions using MapBox API to enhance commuter safety.",
      image: floods,
      tech: ["Python", "PyQt5", "OpenCV", "Matplotlib"],
      github: "https://github.com/Dheeraj101097/ricelengthdetector.git",
      live: " https://flood-monitoring-system.vercel.app/",
      icon: <Zap className="w-8 h-8" />,
      category: "IoT",
      featured: false,
    },
    {
      title: "Rice Grain Length Analysis System",
      description:
        "A Python-based desktop application with OpenCV for accurate rice grain length analysis and classification, achieving over 95% accuracy using image processing techniques like thresholding, edge detection, and contour analysis, with a user-friendly GUI for quality assessment.",
      image: riceg,
      tech: ["Python", "PyQt5", "OpenCV", "Matplotlib"],
      github: "https://github.com/Dheeraj101097/ricelengthdetector.git",
      live: "https://rice-length-detector.vercel.app/",
      icon: <Globe className="w-8 h-8" />,
      category: "Web",
      featured: false,
    },
    {
      title: "FoodZone - AI Recipe App",
      description:
        "A full-stack, AI-enhanced recipe management web app with secure user authentication, React Router-based navigation, full CRUD functionality for 150+ users, and optimized performance with Google AI integration for faster, more accurate recipe searches.",
      image: foodapp,
      tech: ["React", "Express.js", "MongoDB", "Node.js"],
      github: "https://github.com/Dheeraj101097/khanabanao.git",
      live: "https://foodzone-woad.vercel.app",
      icon: <Globe className="w-8 h-8" />,
      category: "Web",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background (Theme: Green & Teal) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-primary-800/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-secondary-500/5 to-accent-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent animate-gradient-x">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, IoT systems,
            and embedded electronics.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -15,
                rotateY: 5,
                scale: 1.02,
              }}
              // Card Style: Darker panel in dark mode (gray-900)
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-secondary-500/10 border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-secondary-500/30 transition-all duration-500 group relative"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Featured Badge (Teal/Mint Gradient) */}
              {project.featured && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  className="absolute top-4 left-4 z-20 bg-gradient-to-r from-secondary-400 to-accent-400 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg"
                >
                  <Star className="w-4 h-4 fill-current" />
                  Featured
                </motion.div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Icon (Green -> Mint -> Teal cycle) */}
                <motion.div
                  className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg backdrop-blur-sm"
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    animate={{
                      color: ["#1ec988", "#6edbae", "#1b765c", "#1ec988"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {project.icon}
                  </motion.div>
                </motion.div>

                {/* Hover Actions */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    className="p-3 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-200 rounded-full shadow-lg hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.live}
                    className="p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-500 transition-colors duration-200"
                  >
                    <Eye size={20} />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6 relative">
                {/* Animated Background Gradient on Card Body */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.span
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-100 dark:border-primary-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.span>
                    <div className="flex gap-2">
                      <motion.a
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors duration-200"
                      >
                        <Github size={16} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.15, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.live}
                        className="p-2 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full hover:bg-primary-200 dark:hover:bg-primary-900 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>

                  <motion.h3
                    className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-secondary-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#1b765c", // Secondary (Teal) Hover
                          color: "#FFFFFF",
                        }}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-medium cursor-pointer transition-all duration-200 border border-transparent hover:border-secondary-400"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
