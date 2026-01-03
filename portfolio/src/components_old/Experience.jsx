import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Award,
  Code,
  Lightbulb,
  TrendingUp,
  X,
  ChevronRight,
} from "lucide-react";
import omlikids from "../assets/mw.png";
import mw from "../assets/mw.png";
import bombay from "../assets/bombay.png";
import roorkee from "../assets/roorkee.png";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      title: "Device Engineer Intern",
      icon: omlikids,
      company: "Omli Technologies Pvt Ltd. (Gurgaon)",
      location: "Gurgaon, India",
      duration: "Dec 2025 - present",
      type: "Internship",
      description:
        "Designed a real-time voice interaction Doro Toy (AI-powered smart toy) on ESP32-S3 for children to develop communication skills and gain confidence through interactive storytelling and games.",
      achievements: [
        "Engineered a low-latency voice interaction system on ESP32-S3 using ESP-IDF, optimizing an Edge Impulse keyword spotting model to achieve <100ms inference time via continuous DSP signal processing.",
        "Architected a closed-loop MLOps pipeline for model improvement; automated the ingestion of field audio samples to iteratively retrain the neural network, significantly reducing the False Rejection Rate (FRR) in noisy environments.",
        "Implemented a robust OTA (Over-The-Air) update mechanism utilizing custom partition tables, enabling remote deployment of new quantized model binaries and firmware patches without bricking devices.",
        "Developed a non-blocking Wi-Fi provisioning manager using FreeRTOS tasks and event groups, ensuring network connectivity processes do not preempt critical real-time voice acquisition threads.",
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
      title: "Research Intern",
      company: "Indian Institute of Technology Bombay (IIT Bombay)",
      icon: bombay,
      duration: "Nov 2025 - Dec 2025",
      type: "Research",
      description:
        "Operational Viability and Performance Asymmetry of NIST PQC Standards: A Comparative Analysis of ML-DSA and FN-DSA for IoT Applications.",
      achievements: [
        "Evaluated the operational viability of NIST-standardized lattice-based algorithms (ML-DSA vs. FN-DSA) on resource-constrained embedded systems to guide the migration from RSA/ECC.",
        "Developed a dual-platform benchmarking framework (High-performance Host vs. ESP32-240MHz) using liboqs; systematically measured computational latency, energy efficiency, and transmission overhead; analyzed the impact of hardware Floating Point Units (FPU) on algorithm performance.",
        "Demonstrated a 56% reduction in bandwidth for FN-DSA (ideal for LoRaWAN) vs. a 4.2x speed advantage for ML-DSA on embedded devices; identified critical hardware blind spots regarding FPU emulation, providing actionable deployment guidelines for secure IoT infrastructure.",
      ],
      skills: ["Cryptography", "Post-Quantum Algorithms", "liboqs", "Python"],
    },
    {
      title: "Engineering Intern",
      company: "Mantiswave Networks",
      icon: mw,
      duration: "July 2025 - Oct 2025",
      type: "Internship",
      description:
        "Developed and programmed an ESP32 to host a responsive web dashboard enabling real-time pattern control and visualization for a Reconfigurable Intelligent Surface (RIS) system.",
      achievements: [
        "Designed and deployed manual and auto grid modes with secure Wi-Fi provisioning, enabling seamless UART data integration from STM32 via WebSocket for real-time pattern visualization and manual transmission.",
        "Leveraged SPIFFS and onboard flash memory to boost asset delivery speed and response time; system achieved reliable wireless control over a 100 ft range during field testing.",
      ],
      skills: [
        "Arduino C++",
        "HTML/CSS/JS",
        "API Integration",
        "STM32",
        "Web Socket",
        "Python",
      ],
    },
    {
      title: "SPARK (Research) Intern",
      company: "Indian Institute of Technology Roorkee (IIT Roorkee)",
      icon: roorkee,
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

  const getTypeColor = (type) => {
    switch (type) {
      case "Internship":
        return "bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 border-primary-200 dark:border-primary-800";
      case "Research":
        return "bg-accent-50 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300 border-accent-200 dark:border-accent-800";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Blobs (Blue & Copper) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl"
        />
        {/* Floating Icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary-500/10 dark:text-primary-400/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
            }}
          >
            {i % 2 === 0 ? <Code size={24} /> : <TrendingUp size={24} />}
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Experience
          </motion.h2>
          <motion.p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey through internships, research, and academic
            roles.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0 group"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-primary-500 to-accent-500 opacity-30" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-4 top-6 w-4 h-4 rounded-full z-10 bg-gray-50 dark:bg-gray-950 border-2 border-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:border-secondary-500 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all duration-300" />

              {/* Content Card */}
              <div className="ml-16 bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-secondary-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-secondary-400 transition-colors">
                        {exp.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                          exp.type
                        )}`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={exp.icon}
                        alt={exp.company}
                        className="w-8 h-8 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                      />
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* DESKTOP VIEW: Full Achievements List */}
                <div className="hidden md:block">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                      <Award size={18} className="text-secondary-500" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-1.5 flex-shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* MOBILE VIEW: "View Key Achievements" Button */}
                <div className="md:hidden mt-4">
                  <button
                    onClick={() => setSelectedExp(exp)}
                    className="flex items-center gap-2 text-sm font-semibold text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
                  >
                    View Key Achievements <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MOBILE MODAL: Full Details */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 flex justify-between items-start sticky top-0 z-10">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {selectedExp.title}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {selectedExp.company}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedExp(null)}
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  <X size={20} className="text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 overflow-y-auto">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                    <Award size={18} className="text-secondary-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-4">
                    {selectedExp.achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-1.5 flex-shrink-0" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                    <Code size={18} className="text-primary-500" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium border border-primary-100 dark:border-primary-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
