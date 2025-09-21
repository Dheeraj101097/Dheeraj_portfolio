import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Users,
  Code,
  Lightbulb,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Intern",
      company: " Mantiswave Networks",
      // location: "San Francisco, CA",
      duration: "Jun 2025 - present",
      type: "Internship",
      description:
        "Developed and programmed an ESP32 to host a responsive web dashboard enabling real-time pattern control and visualization for a Reconfigurable Intelligent Surface (RIS) system.",
      achievements: [
        "Designed and deployed manual and auto grid modes with secure Wi-Fi provisioning, enabling seamless UART data integration from STM32 via WebSocket for real-time pattern visualization and manual transmission.",
        " Leveraged SPIFFS and onboard flash memory to boost asset delivery speed and response time; system achieved reliable wireless control over a 100 ft range during field testing.",
      ],
      skills: [
        "Arduino C++",
        "HTML/CSS/JS",
        "API Integration",
        "STM32",
        "Web Socket",
        "Python",
        "Sensor Integration",
      ],
    },
    {
      title: "SPARK Intern",
      company: " Indian Institute of Technology Roorkee (IIT Roorkee)",
      // location: "Stanford, CA",
      duration: "May 2025 - June 2025",
      type: "Research",
      description:
        "Developed a hybrid DSSAT-Pythia and CNN-LSTM framework to generate high-resolution, spatially interpolated soybean yield estimates for Bundelkhand, India.",
      achievements: [
        "Calibrated crop models using integrated remote sensing soil data, NASA POWER weather, and custom cultivar inputs, running 1,000+ Monte Carlo simulations for optimal accuracy and reliability.",
        "Achieved high-precision calibration (RMSE: 146 kg/ha, NRMSE: 0.19), closely matching simulated and observed yields.",
        "Enhanced prediction accuracy by implementing a CNN-LSTM model (R² = 0.98, NRMSE = 17.4%), reducing error by 13% over DSSAT-only approaches.",
      ],
      skills: ["DSSAT", "Deep Learning", "Python"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Internship":
        return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300";
      case "Research":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300";
      case "Academic":
        return "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case "High":
        return "text-emerald-500";
      case "Medium":
        return "text-yellow-500";
      case "Low":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"
        />

        {/* Floating Work Icons */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-indigo-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {i % 4 === 0 ? (
              <Briefcase className="w-4 h-4" />
            ) : i % 4 === 1 ? (
              <Code className="w-4 h-4" />
            ) : i % 4 === 2 ? (
              <Lightbulb className="w-4 h-4" />
            ) : (
              <TrendingUp className="w-4 h-4" />
            )}
          </motion.div>
        ))}
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
            Experience
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My professional journey through internships, research, and academic
            roles.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-cyan-500"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "top" }}
                />
              )}

              {/* Timeline dot */}
              <motion.div
                className="absolute left-4 top-6 w-4 h-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full shadow-lg z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Content card */}
              <motion.div
                className="ml-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                whileHover={{
                  scale: 1.02,
                  rotateY: 3,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Card Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-40"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.h3
                          className="text-2xl font-bold text-gray-900 dark:text-white"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
                            exp.type
                          )}`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {exp.type}
                        </motion.span>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 mb-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Briefcase size={18} />
                        </motion.div>
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>

                    {/* Impact & Team Size Metrics */}
                    <div className="flex gap-4 text-sm">
                      {" "}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <motion.p
                    className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {exp.description}
                  </motion.p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Award size={18} className="text-emerald-500" />
                      </motion.div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Key Achievements:
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1 }}
                          whileHover={{ x: 10 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: achIndex * 0.3,
                            }}
                          />
                          <span className="text-gray-700 dark:text-gray-300">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Code size={16} />
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.05 }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#6366F1",
                            color: "#FFFFFF",
                          }}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium cursor-pointer transition-all duration-200"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
