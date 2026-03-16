import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Award, Code, TrendingUp, X, ChevronRight } from "lucide-react";
import omlikids from "../assets/omli.png";
import mw from "../assets/mw.png";
import bombay from "../assets/bombay.png";
import roorkee from "../assets/roorkee.png";
import LiquidGlassCard, { useDarkMode } from "./LiquidGlassCard";

// ── Glass pill badge ──────────────────────────────────────────────────────
const GlassBadge = ({ children, variant = "default" }) => {
  const isDark = useDarkMode();
  const colors = {
    internship: isDark
      ? { bg: "rgba(32,252,143,0.08)", border: "rgba(32,252,143,0.2)", text: "#20fc8f" }
      : { bg: "rgba(13,138,77,0.08)", border: "rgba(13,138,77,0.25)", text: "#0d8a4d" },
    research: isDark
      ? { bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.2)", text: "#5eead4" }
      : { bg: "rgba(15,118,110,0.08)", border: "rgba(15,118,110,0.25)", text: "#0f766e" },
    default: isDark
      ? { bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)", text: "rgba(255,255,255,0.7)" }
      : { bg: "rgba(0,0,0,0.04)", border: "rgba(0,0,0,0.12)", text: "#374151" },
  };
  const c = colors[variant] ?? colors.default;

  return (
    <span
      className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
      style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.text,
        boxShadow: `inset 0 1px 1px rgba(255,255,255,0.12)`,
      }}
    >
      {children}
    </span>
  );
};

// ── Glass skill pill ──────────────────────────────────────────────────────
const SkillPill = ({ children }) => {
  const isDark = useDarkMode();
  return (
    <span
      className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm transition-all duration-200"
      style={{
        background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.55)",
        border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.7)",
        color: isDark ? "rgba(255,255,255,0.75)" : "#374151",
        boxShadow: isDark
          ? "inset 0 1px 1px rgba(255,255,255,0.08)"
          : "inset 0 1.5px 2px rgba(255,255,255,0.9), 0 2px 6px rgba(0,0,0,0.06)",
      }}
    >
      {children}
    </span>
  );
};

// ── Main component ────────────────────────────────────────────────────────
const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const isDark = useDarkMode();

  const experiences = [
    {
      title: "Device Engineer Intern",
      icon: omlikids,
      company: "Omli Technologies Pvt Ltd. (Gurgaon)",
      duration: "Dec 2025 - present",
      type: "Internship",
      badgeVariant: "internship",
      description:
        "Designed a real-time voice interaction Doro Toy (AI-powered smart toy) on ESP32-S3 for children to develop communication skills and gain confidence through interactive storytelling and games.",
      achievements: [
        "Engineered a low-latency voice interaction system on ESP32-S3 using ESP-IDF, optimizing an Edge Impulse keyword spotting model to achieve <100ms inference time via continuous DSP signal processing.",
        "Architected a closed-loop MLOps pipeline for model improvement; automated the ingestion of field audio samples to iteratively retrain the neural network, significantly reducing the False Rejection Rate (FRR) in noisy environments.",
        "Implemented a robust OTA (Over-The-Air) update mechanism utilizing custom partition tables, enabling remote deployment of new quantized model binaries and firmware patches without bricking devices.",
        "Developed a non-blocking Wi-Fi provisioning manager using FreeRTOS tasks and event groups, ensuring network connectivity processes do not preempt critical real-time voice acquisition threads.",
      ],
      skills: ["Arduino C++", "HTML/CSS/JS", "API Integration", "STM32", "Web Socket", "Python", "Sensor Integration"],
    },
    {
      title: "Research Intern",
      company: "Indian Institute of Technology Bombay (IIT Bombay)",
      icon: bombay,
      duration: "Nov 2025 - Dec 2025",
      type: "Research",
      badgeVariant: "research",
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
      badgeVariant: "internship",
      description:
        "Developed and programmed an ESP32 to host a responsive web dashboard enabling real-time pattern control and visualization for a Reconfigurable Intelligent Surface (RIS) system.",
      achievements: [
        "Designed and deployed manual and auto grid modes with secure Wi-Fi provisioning, enabling seamless UART data integration from STM32 via WebSocket for real-time pattern visualization and manual transmission.",
        "Leveraged SPIFFS and onboard flash memory to boost asset delivery speed and response time; system achieved reliable wireless control over a 100 ft range during field testing.",
      ],
      skills: ["Arduino C++", "HTML/CSS/JS", "API Integration", "STM32", "Web Socket", "Python"],
    },
    {
      title: "SPARK (Research) Intern",
      company: "Indian Institute of Technology Roorkee (IIT Roorkee)",
      icon: roorkee,
      duration: "May 2025 - June 2025",
      type: "Research",
      badgeVariant: "research",
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

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden transition-colors duration-500
        bg-[#f5f6f4] dark:bg-gray-900"
    >
      {/* ── Fluid mesh accent blobs (sit BEHIND the glass cards) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary neon mint blob — top left (vivid so frost has something to diffuse) */}
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.35, 1], opacity: [0.22, 0.38, 0.22] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full"
          style={{
            background: isDark
              ? "radial-gradient(circle, #20fc8f 0%, #0d8a4d 40%, transparent 70%)"
              : "radial-gradient(circle, #84a19d 0%, #3f5e5a 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Deep teal blob — bottom right */}
        <motion.div
          animate={{ rotate: [360, 0], scale: [1.2, 1, 1.2], opacity: [0.18, 0.30, 0.18] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-[34rem] h-[34rem] rounded-full"
          style={{
            background: isDark
              ? "radial-gradient(circle, #3f5e5a 0%, #1b765c 40%, transparent 70%)"
              : "radial-gradient(circle, #c2c7c0 0%, #84a19d 40%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Center ambient glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.10, 0.20, 0.10] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48rem] h-[48rem] rounded-full"
          style={{
            background: isDark
              ? "radial-gradient(circle, #3f5e5a 0%, transparent 65%)"
              : "radial-gradient(circle, #c2c7c0 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />
        {/* Floating icons */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i * 14 + 8) % 100}%`,
              top: `${(i * 19 + 5) % 100}%`,
              color: isDark ? "rgba(32,252,143,0.06)" : "rgba(13,138,77,0.08)",
            }}
            animate={{ y: [0, -20, 0], opacity: [0.06, 0.25, 0.06] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity }}
          >
            {i % 2 === 0 ? <Code size={22} /> : <TrendingUp size={22} />}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent animate-gradient-x">
            Experience
          </h2>
          <p className="text-lg max-w-2xl mx-auto"
            style={{ color: isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)" }}>
            My professional journey through internships, research, and academic roles.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0 group"
            >
              {/* Timeline connector line */}
              {index < experiences.length - 1 && (
                <div
                  className="absolute left-6 top-[4.5rem] w-px h-full"
                  style={{
                    background: isDark
                      ? "linear-gradient(to bottom, rgba(32,252,143,0.35), rgba(32,252,143,0.05))"
                      : "linear-gradient(to bottom, rgba(13,138,77,0.35), rgba(13,138,77,0.05))",
                  }}
                />
              )}

              {/* Timeline dot */}
              <motion.div
                animate={{ boxShadow: isDark
                  ? "0 0 0 3px rgba(32,252,143,0.15), 0 0 16px rgba(32,252,143,0.5)"
                  : "0 0 0 3px rgba(13,138,77,0.15), 0 0 12px rgba(13,138,77,0.4)" }}
                className="absolute left-4 top-6 w-4 h-4 rounded-full z-10"
                style={{
                  background: isDark ? "#20fc8f" : "#0d8a4d",
                  boxShadow: isDark
                    ? "0 0 0 3px rgba(32,252,143,0.15), 0 0 16px rgba(32,252,143,0.5)"
                    : "0 0 0 3px rgba(13,138,77,0.15), 0 0 12px rgba(13,138,77,0.4)",
                }}
              />

              {/* ── Liquid Glass Card ── */}
              <LiquidGlassCard className="ml-16" radius="rounded-[1.75rem]">
                <div className="p-6 md:p-8">
                  {/* Title row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3
                      className="text-xl md:text-2xl font-bold transition-colors duration-300"
                      style={{ color: isDark ? "#ffffff" : "#111827" }}
                    >
                      {exp.title}
                    </h3>
                    <GlassBadge variant={exp.badgeVariant}>{exp.type}</GlassBadge>
                  </div>

                  {/* Company */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={exp.icon}
                      alt={exp.company}
                      className="w-8 h-8 rounded-full object-cover"
                      style={{
                        border: isDark
                          ? "1px solid rgba(255,255,255,0.12)"
                          : "1px solid rgba(0,0,0,0.1)",
                      }}
                    />
                    <span
                      className="font-semibold text-sm"
                      style={{ color: isDark ? "#20fc8f" : "#0d8a4d" }}
                    >
                      {exp.company}
                    </span>
                  </div>

                  {/* Duration */}
                  <div
                    className="flex items-center gap-2 text-sm mb-4"
                    style={{ color: isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)" }}
                  >
                    <Calendar size={13} />
                    <span>{exp.duration}</span>
                  </div>

                  {/* Description */}
                  <p
                    className="mb-5 leading-relaxed text-sm"
                    style={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.65)" }}
                  >
                    {exp.description}
                  </p>

                  {/* DESKTOP: achievements + skills */}
                  <div className="hidden md:block">
                    <h4
                      className="font-semibold flex items-center gap-2 mb-3 text-sm"
                      style={{ color: isDark ? "#ffffff" : "#111827" }}
                    >
                      <Award
                        size={16}
                        style={{ color: isDark ? "#20fc8f" : "#0d8a4d" }}
                      />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 mb-5">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed"
                          style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)" }}>
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-[0.4rem] flex-shrink-0"
                            style={{ background: isDark ? "#20fc8f" : "#0d8a4d" }}
                          />
                          {ach}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <SkillPill key={i}>{skill}</SkillPill>
                      ))}
                    </div>
                  </div>

                  {/* MOBILE: expand button */}
                  <div className="md:hidden mt-2">
                    <button
                      onClick={() => setSelectedExp(exp)}
                      className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                      style={{ color: isDark ? "#20fc8f" : "#0d8a4d" }}
                    >
                      View Key Achievements <ChevronRight size={15} />
                    </button>
                  </div>
                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Mobile modal ── */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(12px)" }}
            />

            {/* Modal — thick glass */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 480 }}
              className="relative w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden max-h-[85vh] flex flex-col"
              style={{
                boxShadow: isDark
                  ? "inset 0px 1.5px 2px rgba(255,255,255,0.18), inset 0px 0px 0px 1px rgba(255,255,255,0.06), 0px 32px 80px rgba(0,0,0,0.6)"
                  : "inset 0px 2px 3px rgba(255,255,255,0.92), inset 0px 0px 0px 1px rgba(255,255,255,0.55), 0px 16px 48px rgba(0,0,0,0.12)",
              }}
            >
              {/* Blur fill */}
              <div
                className="absolute inset-0 backdrop-blur-3xl backdrop-saturate-[180%]"
                style={{ background: isDark ? "rgba(45,45,42,0.75)" : "rgba(255,255,255,0.45)" }}
              />
              {/* Top reflection */}
              <div className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: isDark
                    ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)"
                    : "linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)",
                }} />

              {/* Header */}
              <div
                className="relative z-10 p-6 flex justify-between items-start"
                style={{
                  borderBottom: isDark
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div>
                  <h3 className="text-xl font-bold mb-1"
                    style={{ color: isDark ? "#ffffff" : "#111827" }}>
                    {selectedExp.title}
                  </h3>
                  <p className="text-sm font-semibold"
                    style={{ color: isDark ? "#20fc8f" : "#0d8a4d" }}>
                    {selectedExp.company}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedExp(null)}
                  className="p-2 rounded-full backdrop-blur-sm transition-all duration-200"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                    border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                    color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="relative z-10 p-6 overflow-y-auto">
                <h4 className="font-semibold flex items-center gap-2 mb-3 text-sm"
                  style={{ color: isDark ? "#ffffff" : "#111827" }}>
                  <Award size={16} style={{ color: isDark ? "#20fc8f" : "#0d8a4d" }} />
                  Key Achievements
                </h4>
                <ul className="space-y-4 mb-6">
                  {selectedExp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.65)" }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-[0.4rem] flex-shrink-0"
                        style={{ background: isDark ? "#20fc8f" : "#0d8a4d" }} />
                      {ach}
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold flex items-center gap-2 mb-3 text-sm"
                  style={{ color: isDark ? "#ffffff" : "#111827" }}>
                  <Code size={16} style={{ color: isDark ? "#20fc8f" : "#0d8a4d" }} />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.skills.map((skill, i) => (
                    <SkillPill key={i}>{skill}</SkillPill>
                  ))}
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
