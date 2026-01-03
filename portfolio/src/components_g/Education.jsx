import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  School,
  Trophy,
  Calendar,
  MapPin,
} from "lucide-react";

const Education = () => {
  const educationData = [
    {
      year: "2021 - Present",
      title: "Bachelor of Technology",
      subtitle: "Electronics & Communication Engineering",
      institution: "Guru Ghasidas University, Bilaspur",
      score: "CGPA: 8.6",
      icon: <GraduationCap size={24} />,
      type: "University",
    },
    {
      year: "2021",
      title: "JEE Advanced",
      subtitle: "National Level Entrance Exam",
      institution: "All India Rank",
      score: "AIR: 27553",
      icon: <Trophy size={24} />,
      type: "Exam",
    },
    {
      year: "2019",
      title: "Class 12 (Intermediate)",
      subtitle: "Maths, Physics, Chemistry",
      institution: "Narayana Institutes, Visakhapatnam",
      score: "Percentage: 98%",
      icon: <BookOpen size={24} />,
      type: "School",
    },
    {
      year: "2007 - 2019",
      title: "Class 10 (High School)",
      subtitle: "ICSE Board",
      institution: "St Ann's Convent School",
      score: "Percentage: 94%",
      icon: <School size={24} />,
      type: "School",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Blobs (Green/Mint) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent animate-gradient-x">
            Education Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic milestones and qualifications.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line (Green Gradient) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-secondary-500 opacity-30 md:-translate-x-1/2" />

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal mb-12 w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Spacer for Desktop Zig-Zag */}
              <div className="hidden md:block w-5/12" />

              {/* Central Node (Green Dot) */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                <motion.div
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-50 dark:bg-gray-900 border-2 border-secondary-500 flex items-center justify-center shadow-[0_0_15px_rgba(27,118,92,0.4)]"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-secondary-600 dark:text-secondary-400 transform scale-75 md:scale-100">
                    {item.icon}
                  </div>
                </motion.div>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-20 md:pl-0">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary-500/50 dark:hover:border-secondary-500/50 transition-all duration-300 relative group overflow-hidden ${
                    index % 2 === 0
                      ? "md:mr-auto text-left"
                      : "md:ml-auto text-left md:text-right"
                  }`}
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Year Badge */}
                    <div
                      className={`flex items-center gap-2 mb-3 ${
                        index % 2 !== 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 border border-primary-100 dark:border-primary-800">
                        <Calendar size={12} />
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-secondary-400 transition-colors">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 italic">
                        {item.subtitle}
                      </p>
                    )}

                    <div
                      className={`flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm mb-4 font-medium ${
                        index % 2 !== 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <MapPin size={16} className="text-accent-500" />
                      {item.institution}
                    </div>

                    <div
                      className={`pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between ${
                        index % 2 !== 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Result
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 text-sm font-bold shadow-sm border border-accent-100 dark:border-accent-900/30">
                        {item.score}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
