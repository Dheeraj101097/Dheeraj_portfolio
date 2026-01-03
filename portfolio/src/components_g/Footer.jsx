import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 relative overflow-hidden border-t border-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blob 1: Primary Green */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-primary-500/20 to-primary-900/20 rounded-full blur-3xl"
        />
        {/* Blob 2: Secondary Deep Green */}
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-secondary-500/20 to-secondary-800/20 rounded-full blur-3xl"
        />

        {/* Floating Sparkles (Mint Green) */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-accent-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="w-3 h-3" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent mb-4 animate-gradient-x">
              Dheeraj Patnaik
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Building the future through innovative electronics and software
              solutions.
            </p>
          </motion.div>

          {/* Copyright Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-600 border-t border-gray-800 pt-8 mt-8"
          >
            <p>
              &copy; {new Date().getFullYear()} All rights reserved. Made with{" "}
              <span className="text-secondary-500">React</span> &{" "}
              <span className="text-accent-500">Tailwind</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
