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
      // Theme: Primary (Blue)
      gradient: "from-primary-600 to-primary-400",
      skills: [
        {
          name: "C",
          icon: <Cpu className="w-8 h-8" />,
          color: "text-primary-500",
        },
        {
          name: "Embedded C",
          icon: <Cpu className="w-8 h-8" />,
          color: "text-primary-600",
        },
        {
          name: "JavaScript",
          icon: <Terminal className="w-8 h-8" />,
          color: "text-secondary-400", // Copper/Yellowish
        },
        {
          name: "Python",
          icon: <Code className="w-8 h-8" />,
          color: "text-accent-500", // Cyan
        },
      ],
    },

    {
      icon: <Cpu size={32} />,
      title: "Electronics & Hardware",
      // Theme: Secondary (Copper/Amber)
      gradient: "from-secondary-600 to-secondary-400",
      skills: [
        {
          name: "Arduino & ESP32",
          icon: <Cpu className="w-8 h-8" />,
          color: "text-accent-500",
        },
        {
          name: "Raspberry Pi",
          icon: <Monitor className="w-8 h-8" />,
          color: "text-secondary-500",
        },
        {
          name: "PCB Design",
          icon: <Layers className="w-8 h-8" />,
          color: "text-primary-500",
        },
        {
          name: "Interrupts & Timers",
          icon: <TimerIcon className="w-8 h-8" />,
          color: "text-secondary-600",
        },
      ],
    },

    {
      icon: <Smartphone size={32} />,
      title: "IoT & Embedded",
      // Theme: Mix (Blue to Cyan)
      gradient: "from-primary-500 to-accent-500",
      skills: [
        {
          name: "Wi-Fi & Bluetooth",
          icon: <Wifi className="w-8 h-8" />,
          color: "text-primary-400",
        },
        {
          name: "LoRa & MQTT",
          icon: <Server className="w-8 h-8" />,
          color: "text-accent-400",
        },
        {
          name: "HTTP/REST APIs",
          icon: <Zap className="w-8 h-8" />,
          color: "text-secondary-400",
        },
        {
          name: "Real-time Systems",
          icon: <Cpu className="w-8 h-8" />,
          color: "text-primary-600",
        },
      ],
    },
    {
      icon: <Globe size={32} />,
      title: "Web Technologies",
      // Theme: Accent (Cyan)
      gradient: "from-accent-600 to-accent-400",
      skills: [
        {
          name: "MongoDB",
          icon: <Database className="w-8 h-8" />,
          color: "text-secondary-500",
        },
        {
          name: "Express.js",
          icon: <Layers className="w-8 h-8" />,
          color: "text-gray-500 dark:text-gray-400",
        },
        {
          name: "React",
          icon: <Globe className="w-8 h-8" />,
          color: "text-primary-400",
        },
        {
          name: "Node.js",
          icon: <Server className="w-8 h-8" />,
          color: "text-secondary-400",
        },
      ],
    },
    {
      icon: <Database size={32} />,
      title: "Tools & Integration",
      // Theme: Primary Dark
      gradient: "from-primary-700 to-primary-500",
      skills: [
        {
          name: "Git/GitHub",
          icon: <GitBranch className="w-8 h-8" />,
          color: "text-secondary-500",
        },
        {
          name: "Proteus",
          icon: <Layers className="w-8 h-8" />,
          color: "text-primary-500",
        },
        {
          name: "AI/ML",
          icon: <Server className="w-8 h-8" />,
          color: "text-accent-500",
        },
        {
          name: "MATLAB",
          icon: <Terminal className="w-8 h-8" />,
          color: "text-secondary-600",
        },
      ],
    },
    {
      icon: <Brain size={32} />,
      title: "Soft Skills",
      // Theme: Secondary (Copper)
      gradient: "from-secondary-500 to-secondary-300",
      skills: [
        {
          name: "Problem Solving",
          icon: <Brain className="w-8 h-8" />,
          color: "text-primary-500",
        },
        {
          name: "Collaboration",
          icon: <Users className="w-8 h-8" />,
          color: "text-accent-500",
        },
        {
          name: "Management",
          icon: <Target className="w-8 h-8" />,
          color: "text-secondary-600",
        },
        {
          name: "Public Speaking",
          icon: <Presentation className="w-8 h-8" />,
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
      {/* Animated Background Elements (Blue/Copper/Cyan) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 right-10 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl"
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
          {/* Header Gradient: Blue -> Copper -> Cyan */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive overview of my technical skills and competencies
            across various domains.
          </motion.p>
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
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                z: 50,
              }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-500 relative overflow-hidden group"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card Background Gradient Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl text-white shadow-lg`}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold text-gray-900 dark:text-white"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.title}
                  </motion.h3>
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
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                      }}
                      className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-md border border-transparent hover:border-secondary-500/20 transition-all duration-300 cursor-pointer group/skill"
                    >
                      <motion.div
                        className={`${skill.color} mb-3 group-hover/skill:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 15 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <motion.span
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover/skill:text-secondary-600 dark:group-hover/skill:text-secondary-400 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.name}
                      </motion.span>
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
