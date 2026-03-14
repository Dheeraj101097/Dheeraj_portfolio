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
    accentLight: "rgba(188,212,230,0.35)",
    accentDark: "rgba(153,193,222,0.15)",
    skills: [
      { name: "C / C++", icon: <SiCplusplus />, color: "#659AD2" },
      { name: "Embedded C", icon: <Cpu size={18} />, color: "#A8B9CC" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    ],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    accentLight: "rgba(197,222,221,0.35)",
    accentDark: "rgba(197,222,221,0.12)",
    skills: [
      { name: "ESP32 / ESP-IDF", icon: <SiEspressif />, color: "#E7352C" },
      { name: "FreeRTOS", icon: <Timer size={18} />, color: "#7aafc8" },
      { name: "Arduino", icon: <SiArduino />, color: "#00878A" },
      { name: "Raspberry Pi", icon: <SiRaspberrypi />, color: "#C51A4A" },
    ],
  },
  {
    id: "iot",
    title: "IoT & Protocols",
    accentLight: "rgba(214,226,233,0.40)",
    accentDark: "rgba(188,212,230,0.12)",
    skills: [
      { name: "MQTT", icon: <SiMqtt />, color: "#660066" },
      // { name: "AWS IoT", icon: <SiAmazonwebservices />, color: "#FF9900" },
      { name: "Wi-Fi / BLE", icon: <Wifi size={18} />, color: "#5e96b0" },
      { name: "WebSocket", icon: <Globe size={18} />, color: "#6eb4b2" },
    ],
  },
  {
    id: "hardware",
    title: "Hardware & PCB",
    accentLight: "rgba(250,210,225,0.30)",
    accentDark: "rgba(250,210,225,0.10)",
    skills: [
      { name: "PCB Design", icon: <Layers size={18} />, color: "#bcd4e6" },
      { name: "Altium Designer", icon: <Cpu size={18} />, color: "#A5915B" },
      { name: "Proteus", icon: <Radio size={18} />, color: "#7aafc8" },
      { name: "Oscilloscope", icon: <Zap size={18} />, color: "#c5dedd" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    accentLight: "rgba(219,231,228,0.40)",
    accentDark: "rgba(197,222,221,0.10)",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#333333" },
      // { name: "VS Code", icon: <SiVisualstudiocode />, color: "#007ACC" },
      { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    ],
  },
  {
    id: "ai",
    title: "AI / Advanced",
    accentLight: "rgba(237,220,210,0.35)",
    accentDark: "rgba(237,220,210,0.10)",
    skills: [
      {
        name: "Edge AI / TensorFlow",
        icon: <SiTensorflow />,
        color: "#FF6F00",
      },
      { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" },
      { name: "RTOS", icon: <Timer size={18} />, color: "#7aafc8" },
      { name: "DSP", icon: <BrainCircuit size={18} />, color: "#99c1de" },
      { name: "OTA Updates", icon: <RefreshCw size={18} />, color: "#6eb4b2" },
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
        bg-white/50 dark:bg-white/[0.04]
        border border-white/70 dark:border-white/[0.07]
        backdrop-blur-sm
        shadow-sm hover:shadow-md
        dark:hover:border-white/[0.13]
        transition-all duration-300 cursor-default group"
    >
      {/* Icon with brand color */}
      <span
        className="text-[1.15rem] leading-none flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </span>
      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
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
      <div className="absolute top-10 left-8  w-72 h-72 orb-sky  opacity-50 dark:opacity-0" />
      <div className="absolute bottom-10 right-8 w-80 h-80 orb-peach opacity-40 dark:opacity-0" />
      <div className="absolute top-10 left-8  w-72 h-72 orb-rose opacity-0 dark:opacity-100" />
      <div className="absolute bottom-10 right-8 w-80 h-80 orb-teal opacity-0 dark:opacity-100" />
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
