import React from "react";
import { motion } from "framer-motion";

import certificate1 from "../assets/certificate_1.png";
import certificate2 from "../assets/certificate_2.png";
import certificate3 from "../assets/certificate_3.png";
import certificate4 from "../assets/certificate_4.png";
import certificate5 from "../assets/certificate_5.jpg";
import certificate6 from "../assets/certificate_6.jpg";

const Certificate = () => {
  const certificateData = [
    certificate4,
    certificate5,
    certificate1,
    certificate2,
    certificate3,
    certificate6,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Glows (Blue & Copper) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent animate-gradient-x">
            Certificates
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my certifications and achievements.
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificateData.map((certificate, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                rotateY: 5,
              }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:shadow-primary-500/20 dark:hover:shadow-secondary-500/20 border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-secondary-500/50 transition-all duration-500 relative overflow-hidden group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Overlay (Hidden by default, visible on hover) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              {/* Certificate Image */}
              <div className="relative z-10 flex justify-center items-center overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800">
                <img
                  src={certificate}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-56 object-contain mix-blend-multiply dark:mix-blend-normal transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
