import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Cpu,
  Zap,
  Monitor,
  Server,
  Wifi,
  Layers,
  GitBranch,
  Terminal,
  Brain,
  Users,
  Target,
  Presentation,
  TimerIcon,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Programming Languages",
      gradient: "from-primary-600 to-primary-400",
      skills: [
        {
          name: "C/C++",
          icon: <Code className="w-8 h-8" />,
          color: "text-primary-500",
        },
        {
          name: "Embedded C",
          icon: <Cpu className="w-8 h-8" />,
          color: "text-primary-600",
        },
        {
          name: "Python",
          icon: <Terminal className="w-8 h-8" />,
          color: "text-accent-500",
        },
        {
          name: "JavaScript",
          icon: <Code className="w-8 h-8" />,
          color: "text-secondary-400",
        },
      ],
    },

    {
      icon: <Cpu size={32} />,
      title: "Embedded Systems",
      gradient: "from-secondary-600 to-secondary-400",
      skills: [
        {
          name: "ESP32/ESP-IDF",
          icon: <Cpu className="w-8 h-8" />,
          color: "text-accent-500",
        },
        {
          name: "FreeRTOS",
          icon: <TimerIcon className="w-8 h-8" />,
          color: "text-secondary-500",
        },
        {
          name: "Arduino",
          icon: <Zap className="w-8 h-8" />,
          color: "text-primary-500",
        },
        {
          name: "Raspberry Pi",
          icon: <Monitor className="w-8 h-8" />,
          color: "text-secondary-600",
        },
      ],
    },

    {
      icon: <Wifi size={32} />,
      title: "IoT & Protocols",
      gradient: "from-primary-500 to-accent-500",
      skills: [
        {
          name: "MQTT",
          icon: <Server className="w-8 h-8" />,
          color: "text-primary-400",
        },
        {
          name: "AWS IoT",
          icon: <Database className="w-8 h-8" />,
          color: "text-accent-400",
        },
        {
          name: "Wi-Fi/BLE",
          icon: <Wifi className="w-8 h-8" />,
          color: "text-secondary-400",
        },
        {
          name: "HTTP/WebSocket",
          icon: <Globe className="w-8 h-8" />,
          color: "text-primary-600",
        },
      ],
    },
    {
      icon: <Layers size={32} />,
      title: "Hardware & PCB",
      gradient: "from-accent-600 to-accent-400",
      skills: [
        {
          name: "PCB Design",
          icon: <Layers className="w-8 h-8" />,
          color: "text-secondary-500",
        },
        {
          name: "Altium Designer",
          icon: <Cpu className="w-8 h-8" />,
          color: "text-primary-500",
        },
        {
          name: "Proteus",
          icon: <Monitor className="w-8 h-8" />,
          color: "text-primary-400",
        },
        {
          name: "Oscilloscope",
          icon: <Zap className="w-8 h-8" />,
          color: "text-secondary-400",
        },
      ],
    },
    {
      icon: <Database size={32} />,
      title: "Tools & Platforms",
      gradient: "from-primary-700 to-primary-500",
      skills: [
        {
          name: "Git/GitHub",
          icon: <GitBranch className="w-8 h-8" />,
          color: "text-secondary-500",
        },
        {
          name: "VS Code",
          icon: <Code className="w-8 h-8" />,
          color: "text-primary-500",
        },
        {
          name: "Linux",
          icon: <Terminal className="w-8 h-8" />,
          color: "text-accent-500",
        },
        {
          name: "Docker",
          icon: <Server className="w-8 h-8" />,
          color: "text-secondary-600",
        },
      ],
    },
    {
      icon: <Brain size={32} />,
      title: "Advanced Skills",
      gradient: "from-secondary-500 to-secondary-300",
      skills: [
        {
          name: "Edge AI/ML",
          icon: <Brain className="w-8 h-8" />,
          color: "text-primary-500",
        },
        {
          name: "OTA Updates",
          icon: <Zap className="w-8 h-8" />,
          color: "text-accent-500",
        },
        {
          name: "RTOS",
          icon: <TimerIcon className="w-8 h-8" />,
          color: "text-secondary-600",
        },
        {
          name: "DSP",
          icon: <Cpu className="w-8 h-8" />,
          color: "text-primary-400",
        },
      ],
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements - Reduced animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Header Gradient: Green -> Teal -> Mint */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent animate-gradient-x">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies
            across various domains.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Card Background Gradient Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl text-white shadow-lg`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-md border border-transparent hover:border-secondary-500/20 transition-all duration-300 cursor-pointer group/skill"
                    >
                      <motion.div
                        className={`${skill.color} mb-3 group-hover/skill:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 15 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover/skill:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
