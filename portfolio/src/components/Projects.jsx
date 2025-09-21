import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Zap,
  Smartphone,
  Globe,
  Cpu,
  Star,
  Eye,
} from "lucide-react";
import pis from "../assets/pis.png";
import foodapp from "../assets/foodapp.png";
import floods from "../assets/floods.png";

const Projects = () => {
  const projects = [
    {
      title: "Predictive Irrigation System",
      description:
        "IoT-based smart irrigation system with real-time monitoring, Edge AI, and <> LoRa integration, achieving 97% model accuracy to optimize water usage and crop yield through automated, data-driven pump control.",
      image: pis,
      tech: ["React", "Node.js", "ESP32", "MQTT", "MongoDB", "WebSocket"],
      github: "https://github.com/Dheeraj101097/Irrigo-codefinity.git",
      live: "https://irrigo-codefinity.vercel.app/",
      icon: <Smartphone className="w-8 h-8" />,
      category: "IoT",
      featured: true,
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
      category: "IoT", //application
      featured: false,
    },
    {
      title: "FoodZone - AI Recipe App",
      description:
        "A full-stack, AI-enhanced recipe management web app with secure user authentication, React Router-based navigation, full CRUD functionality for 150+ users, and optimized performance with Google AI integration for faster, more accurate recipe searches.",
      image: foodapp,
      tech: ["React", "Express.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
      github: "https://github.com/Dheeraj101097/khanabanao.git",
      live: "https://foodzone-woad.vercel.app",
      icon: <Globe className="w-8 h-8" />,
      category: "Web",
      featured: false,
    },
    {
      title: "Rice Grain Length Analysis System",
      description:
        "A Python-based desktop application with OpenCV for accurate rice grain length analysis and classification, achieving over 95% accuracy using image processing techniques like thresholding, edge detection, and contour analysis, with a user-friendly GUI for quality assessment.",
      image:
        "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "PyQt5", "OpenCV", "Matplotlib"],
      github: "https://github.com/Dheeraj101097/ricelengthdetector.git",
      live: "https://rice-length-detector.vercel.app/",
      icon: <Globe className="w-8 h-8" />,
      category: "Web", //application
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
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
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
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl"
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
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work spanning web development, IoT systems,
            and embedded electronics.
          </motion.p>
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
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group relative"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg"
                >
                  <Star className="w-4 h-4" />
                  Featured
                </motion.div>
              )}

              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.15 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Floating Icon */}
                <motion.div
                  className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg"
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    animate={{
                      color: ["#6366F1", "#06B6D4", "#10B981", "#6366F1"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {project.icon}
                  </motion.div>
                </motion.div>

                {/* Hover Overlay with Actions */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.live}
                    className="p-3 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition-colors duration-200"
                  >
                    <Eye size={20} />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6 relative">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.span
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.span>
                    <div className="flex gap-2">
                      <motion.a
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
                      >
                        <Github size={16} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.15, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.live}
                        className="p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>

                  <motion.h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#6366F1",
                          color: "#FFFFFF",
                        }}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium cursor-pointer transition-all duration-200"
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
