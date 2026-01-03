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
      icon: <GraduationCap size={20} />,
      type: "University",
    },
    {
      year: "2021",
      title: "JEE Advanced",
      subtitle: "National Level Entrance Exam",
      institution: "All India Rank",
      score: "AIR: 27553",
      icon: <Trophy size={20} />,
      type: "Exam",
    },
    {
      year: "2019",
      title: "Class 12 (Intermediate)",
      subtitle: "Maths, Physics, Chemistry",
      institution: "Narayana Institutes, Visakhapatnam",
      score: "Percentage: 98%",
      icon: <BookOpen size={20} />,
      type: "School",
    },
    {
      year: "2007 - 2019",
      title: "Class 10 (High School)",
      subtitle: "ICSE Board",
      institution: "St Ann's Convent School",
      score: "Percentage: 94%",
      icon: <School size={20} />,
      type: "School",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Education Journey
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic milestones and qualifications.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line (Gradient) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-secondary-500 opacity-30 md:-translate-x-1/2" />

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal mb-12 w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Spacer for Desktop Alternating Layout */}
              <div className="hidden md:block w-5/12" />

              {/* Central Dot (Milestone) */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-900 border-2 border-secondary-500 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.4)] z-10"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-secondary-600 dark:text-secondary-400">
                    {item.icon}
                  </div>
                </motion.div>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-20 md:pl-0">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary-500/50 dark:hover:border-secondary-500/50 transition-all duration-300 relative group overflow-hidden ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Year Badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 border border-primary-100 dark:border-primary-800 mb-4">
                      <Calendar size={12} />
                      {item.year}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-secondary-400 transition-colors">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 italic">
                        {item.subtitle}
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm mb-4 font-medium">
                      <MapPin size={16} className="text-accent-500" />
                      {item.institution}
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Score
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-sm">
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
