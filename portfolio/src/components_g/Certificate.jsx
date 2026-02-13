import React from "react";
import { motion } from "framer-motion";

// Import your images
import certificate2 from "../assets/certificate_2.png";
import certificate3 from "../assets/certificate_3.png";
import certificate4 from "../assets/certificate_4.png";
import certificate5 from "../assets/certificate_5.jpg";
import certificate6 from "../assets/certificate_6.jpg";
import nptelns from "../assets/certificate_1.jpg";
import nptelj from "../assets/certificate_2.jpg";
import nptelcc from "../assets/certificate_3.jpg";
import iitbi from "../assets/iitbi.jpg";
import iitri from "../assets/iitri.jpeg";
import ide from "../assets/ide.jpg";

const Certificate = () => {
  // Update data to include Titles
  const certificateData = [
    { src: iitbi, title: "IIT Bombay Internship" },
    { src: iitri, title: "IIT Roorkee SPARK" },
    { src: nptelns, title: "NPTEL Network Security (Topper)" },
    { src: nptelj, title: "NPTEL Java Programming (Topper)" },
    { src: nptelcc, title: "NPTEL Cloud Computing" },
    { src: ide, title: "Innovation Driven Entrepreneurship" },
    { src: certificate4, title: "GFG Hacktivate (Top 10)" },
    { src: certificate5, title: "Vertex Innovate (Finalist)" },
    { src: certificate2, title: "Web Development" },
    { src: certificate3, title: "" },
    { src: certificate6, title: "" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Glows */}
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

        {/* Certificate Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificateData.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-secondary-500/10 border border-gray-100 dark:border-gray-800 transition-all duration-300 group flex flex-col overflow-hidden"
            >
              {/* Image Container with Smooth Zoom */}
              <div className="relative overflow-hidden h-48 w-full bg-gray-100 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Title Section */}
              <div className="p-4 text-center relative z-20 bg-white dark:bg-gray-900">
                <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-secondary-400 transition-colors duration-300 line-clamp-1">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
