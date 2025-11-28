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
  Wrench,
  Brain,
  Users,
  Target,
  MessageSquare,
  Presentation,
  TimerIcon,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Programming Languages",
      color: "from-blue-500 to-purple-600",
      skills: [
        {
          name: "C/C++",
          icon: <Cpu className="w-8 h-8" />,
          color: "text-blue-600",
        },
        {
          name: "JavaScript",
          icon: <Terminal className="w-8 h-8" />,
          color: "text-yellow-500",
        },
        {
          name: "Python",
          icon: <Code className="w-8 h-8" />,
          color: "text-green-500",
        },
        // {
        //   name: "VHDL",
        //   icon: <Layers className="w-8 h-8" />,
        //   color: "text-purple-500",
        // },
        // {
        //   name: "Java",
        //   icon: <Monitor className="w-8 h-8" />,
        //   color: "text-red-500",
        // },
      ],
    },

    {
      icon: <Cpu size={32} />,
      title: "Electronics & Hardware",
      color: "from-orange-500 to-red-600",
      skills: [
        {
          name: "Arduino & ESP32",
          icon: <Cpu className="w-8 h-8" />,
          color: "text-teal-500",
        },
        {
          name: "Raspberry Pi",
          icon: <Monitor className="w-8 h-8" />,
          color: "text-red-500",
        },
        {
          name: "PCB Design",
          icon: <Layers className="w-8 h-8" />,
          color: "text-green-600",
        },
        {
          name: " Interrupts & Timers",
          icon: <TimerIcon className="w-8 h-8" />,
          color: "text-purple-500",
        },
      ],
    },
    {
      icon: <Globe size={32} />,
      title: "Web Technologies",
      color: "from-emerald-500 to-teal-600",
      skills: [
        {
          name: "MongoDB",
          icon: <Database className="w-8 h-8" />,
          color: "text-green-500",
        },
        {
          name: "Express.js",
          icon: <Layers className="w-8 h-8" />,
          color: "text-gray-600",
        },
        {
          name: "React",
          icon: <Globe className="w-8 h-8" />,
          color: "text-cyan-500",
        },
        {
          name: "Node.js",
          icon: <Server className="w-8 h-8" />,
          color: "text-green-600",
        },
      ],
    },
    {
      icon: <Smartphone size={32} />,
      title: "IoT & Embedded",
      color: "from-purple-500 to-pink-600",
      skills: [
        {
          name: " Wi-Fi & Bluetooth",
          icon: <Wifi className="w-8 h-8" />,
          color: "text-blue-500",
        },
        {
          name: "LoRa & MQTT",
          icon: <Server className="w-8 h-8" />,
          color: "text-green-500",
        },
        {
          name: "HTTP/REST APIs & Socket.IO",
          icon: <Zap className="w-8 h-8" />,
          color: "text-yellow-500",
        },
        {
          name: "Real-time Systems",
          icon: <Cpu className="w-8 h-8" />,
          color: "text-red-500",
        },
      ],
    },
    {
      icon: <Database size={32} />,
      title: "Tools & System Integration",
      color: "from-cyan-500 to-blue-600",
      skills: [
        {
          name: "Git/GitHub",
          icon: <GitBranch className="w-8 h-8" />,
          color: "text-gray-700",
        },
        {
          name: "Proteus",
          icon: <Layers className="w-8 h-8" />,
          color: "text-blue-500",
        },
        {
          name: "AI/ML",
          icon: <Server className="w-8 h-8" />,
          color: "text-orange-500",
        },
        {
          name: "MATLAB",
          icon: <Terminal className="w-8 h-8" />,
          color: "text-red-600",
        },
      ],
    },
    {
      icon: <Brain size={32} />,
      title: "Soft Skills",
      color: "from-pink-500 to-rose-600",
      skills: [
        {
          name: "Problem Solving",
          icon: <Brain className="w-8 h-8" />,
          color: "text-purple-500",
        },
        {
          name: "Team Collaboration",
          icon: <Users className="w-8 h-8" />,
          color: "text-blue-500",
        },
        {
          name: "Project Management",
          icon: <Target className="w-8 h-8" />,
          color: "text-green-500",
        },
        {
          name: "Public Speaking",
          icon: <Presentation className="w-8 h-8" />,
          color: "text-red-500",
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-xl"
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
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-xl"
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
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-lg"
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
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
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
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {/* {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-30"
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
                  ))} */}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl text-white shadow-lg`}
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
                    whileHover={{ x: 10 }}
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
                        scale: 1.1,
                        rotate: 5,
                        y: -5,
                      }}
                      className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer group/skill"
                    >
                      <motion.div
                        className={`${skill.color} mb-3 group-hover/skill:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 15 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <motion.span
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover/skill:text-indigo-500 dark:group-hover/skill:text-indigo-400 transition-colors duration-300"
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
