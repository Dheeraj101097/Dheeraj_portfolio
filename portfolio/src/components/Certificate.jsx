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
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
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
              whileHover={{ scale: 1.05, rotateY: 5, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Overlay like Skills */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-40"
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
                ))}
              </div>

              {/* Certificate Image */}
              <div className="relative z-10 flex justify-center items-center">
                <img
                  src={certificate}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-64 object-contain rounded-xl"
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
