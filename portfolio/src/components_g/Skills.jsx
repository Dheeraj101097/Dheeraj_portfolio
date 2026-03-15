import { motion } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiArduino,
  SiRaspberrypi,
  SiEspressif,
  // SiAmazonwebservices,
  SiGit,
  SiGithub,
  // SiVisualstudiocode,
  SiLinux,
  SiDocker,
  SiTensorflow,
  SiOpencv,
  SiMqtt,
} from "react-icons/si";
import {
  Cpu,
  Wifi,
  Layers,
  Zap,
  Globe,
  Timer,
  Radio,
  BrainCircuit,
  RefreshCw,
} from "lucide-react";

/* ─── Skill data ─────────────────────────────────────────────────────────── */
const categories = [
  {
    id: "lang",
    title: "Languages",
    accentLight: "rgba(240,101,67, 0.12)",
    accentDark: "rgba(240,101,67, 0.14)",
    skills: [
      { name: "C / C++", icon: <SiCplusplus />, color: "#659AD2" },
      { name: "Embedded C", icon: <Cpu size={18} />, color: "#706f6e" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#D4A800" },
    ],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    accentLight: "rgba(240,157,81, 0.12)",
    accentDark: "rgba(240,157,81, 0.14)",
    skills: [
      { name: "ESP32 / ESP-IDF", icon: <SiEspressif />, color: "#E7352C" },
      { name: "FreeRTOS", icon: <Timer size={18} />, color: "#f09d51" },
      { name: "Arduino", icon: <SiArduino />, color: "#00878A" },
      { name: "Raspberry Pi", icon: <SiRaspberrypi />, color: "#C51A4A" },
    ],
  },
  {
    id: "iot",
    title: "IoT & Protocols",
    accentLight: "rgba(240,101,67, 0.08)",
    accentDark: "rgba(240,101,67, 0.10)",
    skills: [
      { name: "MQTT", icon: <SiMqtt />, color: "#8b4ca8" },
      // { name: "AWS IoT",     icon: <SiAmazonwebservices />, color: "#FF9900" },
      { name: "Wi-Fi / BLE", icon: <Wifi size={18} />, color: "#f06543" },
      { name: "WebSocket", icon: <Globe size={18} />, color: "#f09d51" },
    ],
  },
  {
    id: "hardware",
    title: "Hardware & PCB",
    accentLight: "rgba(240,157,81, 0.10)",
    accentDark: "rgba(240,157,81, 0.12)",
    skills: [
      { name: "PCB Design", icon: <Layers size={18} />, color: "#f06543" },
      { name: "Altium Designer", icon: <Cpu size={18} />, color: "#A5915B" },
      { name: "Proteus", icon: <Radio size={18} />, color: "#706f6e" },
      { name: "Oscilloscope", icon: <Zap size={18} />, color: "#f09d51" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    accentLight: "rgba(240,101,67, 0.09)",
    accentDark: "rgba(240,101,67, 0.11)",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#706f6e" },
      // { name: "VS Code", icon: <SiVisualstudiocode />, color: "#007ACC" },
      { name: "Linux", icon: <SiLinux />, color: "#C9A000" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    ],
  },
  {
    id: "ai",
    title: "AI / Advanced",
    accentLight: "rgba(240,157,81, 0.11)",
    accentDark: "rgba(240,157,81, 0.13)",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
      { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" },
      { name: "RTOS", icon: <Timer size={18} />, color: "#f09d51" },
      { name: "DSP", icon: <BrainCircuit size={18} />, color: "#f06543" },
      { name: "OTA Updates", icon: <RefreshCw size={18} />, color: "#706f6e" },
    ],
  },
];

/* ─── Skill chip ─────────────────────────────────────────────────────────── */
function SkillChip({ skill, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, scale: 1.04 }}
      className="flex items-center gap-2 px-3 py-2 rounded-xl
        bg-silver/60 dark:bg-white/[0.05]
        border border-silver dark:border-white/[0.08]
        hover:border-primary-400/50 dark:hover:border-primary-500/30
        backdrop-blur-sm shadow-sm hover:shadow-md
        transition-all duration-300 cursor-default group"
    >
      {/* Icon with brand color */}
      <span
        className="text-[1.15rem] leading-none flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </span>
      <span className="text-xs font-medium text-gray-600 dark:text-gray-200 whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
}

/* ─── Category card ──────────────────────────────────────────────────────── */
function CategoryCard({ cat, cardDelay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: cardDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative rounded-2xl p-5
        glass dark:glass-dark
        overflow-hidden group"
    >
      {/* Pastel tint that bleeds in on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 0% 0%, ${cat.accentLight} 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 0% 0%, ${cat.accentDark} 0%, transparent 70%)`,
        }}
      />

      {/* Category label */}
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300 mb-3 relative z-10">
        {cat.title}
      </p>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {cat.skills.map((skill, i) => (
          <SkillChip
            key={skill.name}
            skill={skill}
            delay={cardDelay + i * 0.06}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
const Skills = () => (
  <section className="py-24 mesh-bg-light dark:mesh-bg-dark transition-colors duration-500 relative overflow-hidden">
    {/* Ambient orbs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10  left-8  w-72 h-72 orb-sand  opacity-60 dark:opacity-0" />
      <div className="absolute bottom-10 right-8 w-80 h-80 orb-silver opacity-50 dark:opacity-0" />
      <div className="absolute top-10  left-8  w-72 h-72 orb-coral opacity-0 dark:opacity-100" />
      <div className="absolute bottom-10 right-8 w-80 h-80 orb-amber opacity-0 dark:opacity-100" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">
          Skills & Expertise
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
          Technologies and tools I work with across embedded systems, IoT, and
          software.
        </p>
      </motion.div>

      {/*
        Mobile:  1 col
        md:      2 cols
        lg:      3 cols
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.id} cat={cat} cardDelay={i * 0.08} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
