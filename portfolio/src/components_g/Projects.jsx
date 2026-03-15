import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ExternalLink,
  Github as GithubIcon,
  Zap,
  Smartphone,
  Globe,
  Star,
  Eye,
  Leaf,
  Shield,
  Cpu,
} from "lucide-react";
import pis   from "../assets/pis.png";
import foodapp from "../assets/foodapp.png";
import floods from "../assets/floods.png";
import dssat  from "../assets/dssat.png";
import risd   from "../assets/risd.png";
import riceg  from "../assets/riceg.png";

/* ─── 3-D tilt card ─────────────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useTransform(rawY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(rawX, [-0.5, 0.5], [-7, 7]);

  const springCfg = { stiffness: 220, damping: 22, mass: 0.8 };
  const sRotateX = useSpring(rotateX, springCfg);
  const sRotateY = useSpring(rotateY, springCfg);

  function onMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width  - 0.5);
    rawY.set((e.clientY - rect.top)  / rect.height - 0.5);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ scale: 1.02 }}
      style={{
        rotateX: sRotateX,
        rotateY: sRotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`
        relative rounded-2xl overflow-hidden group
        glass dark:glass-dark
        transition-shadow duration-500
        hover:shadow-[0_12px_48px_rgba(153,193,222,0.28)]
        dark:hover:shadow-[0_12px_48px_rgba(250,210,225,0.14)]
      `}
    >
      {/* ── Featured badge ─────────────────────────────────────────────── */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-300/80 dark:bg-secondary-400/20 border border-primary-300 dark:border-secondary-400/30 text-primary-800 dark:text-secondary-300 text-xs font-semibold backdrop-blur-sm">
          <Star className="w-3 h-3 fill-current" />
          Featured
        </div>
      )}

      {/* ── Image ──────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category icon pill */}
        <div className="absolute top-4 right-4 p-2.5 rounded-full glass dark:glass-dark text-primary-600 dark:text-primary-300">
          {project.icon}
        </div>

        {/* Hover action buttons */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass dark:glass-dark text-gray-700 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
          >
            <GithubIcon size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary-500/90 dark:bg-primary-400/20 border border-primary-400/50 text-white dark:text-primary-200 hover:bg-primary-600/90 transition-colors"
          >
            <Eye size={18} />
          </motion.a>
        </motion.div>
      </div>

      {/* ── Card body ──────────────────────────────────────────────────── */}
      <div className="p-5 relative z-10">
        {/* Subtle body gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-accent-100/20 dark:from-secondary-400/5 dark:to-accent-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl pointer-events-none" />

        <div className="relative">
          {/* Category tag + links row */}
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-200/60 dark:bg-accent-300/10 text-accent-800 dark:text-accent-300 border border-accent-300/40 dark:border-accent-300/20">
              {project.category}
            </span>
            <div className="flex gap-1.5">
              <motion.a
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-gray-100/60 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
              >
                <GithubIcon size={14} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-primary-100/60 dark:bg-primary-400/10 text-primary-600 dark:text-primary-300 hover:text-primary-700 dark:hover:text-primary-200 transition-colors"
              >
                <ExternalLink size={14} />
              </motion.a>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300 leading-snug">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-0.5 text-xs rounded-md bg-silver/50 dark:bg-white/5 text-primary-800 dark:text-primary-300 border border-primary-200/50 dark:border-primary-400/20 cursor-default transition-colors duration-200 hover:bg-primary-200/60 dark:hover:bg-primary-400/15"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
const Projects = () => {
  const projects = [
    {
      title: "RIS Control Dashboard (ESP32)",
      description:
        "An embedded web server hosted entirely on an ESP32 to control Reconfigurable Intelligent Surfaces (RIS). Features a responsive UI served via SPIFFS, real-time pattern visualization using WebSockets, and secure Wi-Fi provisioning for seamless hardware-software integration.",
      image: risd,
      tech: ["ESP32", "C++", "WebSocket", "HTML/CSS", "SPIFFS"],
      github: "https://github.com/Dheeraj101097",
      live: "#",
      icon: <Cpu className="w-5 h-5" />,
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
      github: "https://github.com/Dheeraj101097",
      live: "#",
      icon: <Shield className="w-5 h-5" />,
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
      icon: <Smartphone className="w-5 h-5" />,
      category: "IoT",
      featured: false,
    },
    {
      title: "Soybean Yield Prediction Framework",
      description:
        "A hybrid research framework combining the DSSAT-Pythia crop simulation model with a CNN-LSTM deep learning network. Calibrated using remote sensing and NASA POWER weather data to generate high-resolution yield estimates for Bundelkhand, India, achieving 98% prediction accuracy (R²).",
      image: dssat,
      tech: ["Python", "DSSAT", "Pythia", "Remote Sensing"],
      github: "https://github.com/Dheeraj101097",
      live: "#",
      icon: <Leaf className="w-5 h-5" />,
      category: "ML/AI",
      featured: false,
    },
    {
      title: "FloodSense – Flood Monitoring System",
      description:
        "FloodSense is a patented IoT-based system using Jetson Nano for edge processing. Monitors underpasses in real-time, detects floods & potholes, sends alerts via Firebase, and provides alternate route suggestions using MapBox API.",
      image: floods,
      tech: ["Python", "PyQt5", "OpenCV", "Matplotlib"],
      github: "https://github.com/Dheeraj101097/ricelengthdetector.git",
      live: "https://flood-monitoring-system.vercel.app/",
      icon: <Zap className="w-5 h-5" />,
      category: "IoT",
      featured: false,
    },
    {
      title: "Rice Grain Length Analysis System",
      description:
        "A Python-based desktop application with OpenCV for accurate rice grain length analysis and classification, achieving over 95% accuracy using image processing techniques like thresholding, edge detection, and contour analysis.",
      image: riceg,
      tech: ["Python", "PyQt5", "OpenCV", "Matplotlib"],
      github: "https://github.com/Dheeraj101097/ricelengthdetector.git",
      live: "https://rice-length-detector.vercel.app/",
      icon: <Globe className="w-5 h-5" />,
      category: "Vision",
      featured: false,
    },
    {
      title: "FoodZone – AI Recipe App",
      description:
        "A full-stack, AI-enhanced recipe management web app with secure user authentication, React Router-based navigation, full CRUD functionality for 150+ users, and optimized performance with Google AI integration for faster recipe searches.",
      image: foodapp,
      tech: ["React", "Express.js", "MongoDB", "Node.js"],
      github: "https://github.com/Dheeraj101097/khanabanao.git",
      live: "https://foodzone-woad.vercel.app",
      icon: <Globe className="w-5 h-5" />,
      category: "Web",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <section className="py-24 mesh-bg-light dark:mesh-bg-dark transition-colors duration-500 relative overflow-hidden">
      {/* ── Ambient orbs (dark mode only) ────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-12 w-80 h-80 orb-coral opacity-0 dark:opacity-100" />
        <div className="absolute bottom-16 left-12 w-96 h-96 orb-amber opacity-0 dark:opacity-100" />

        {/* Light mode soft blurs */}
        <div className="absolute top-16 right-12 w-80 h-80 orb-sand opacity-60 dark:opacity-0" />
        <div className="absolute bottom-16 left-12 w-96 h-96 orb-silver opacity-50 dark:opacity-0" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ── Heading ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 heading-gradient">
            Featured Projects
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            A showcase spanning embedded systems, IoT infrastructure, and AI-driven applications.
          </p>
        </motion.div>

        {/* ── Grid ─────────────────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
