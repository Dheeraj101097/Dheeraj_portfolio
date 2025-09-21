import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Star,
} from "lucide-react";
import CustomizedTimeline from "./educationcompt";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
// import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-10 bg-white dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl"
        />

        {/* Floating Academic Icons */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-indigo-400/20"
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
            {i % 3 === 0 ? (
              <BookOpen className="w-4 h-4" />
            ) : i % 3 === 1 ? (
              <GraduationCap className="w-4 h-4" />
            ) : (
              <Star className="w-4 h-4" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Education
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col md:flex-row items-start">
              <div className=" mx-auto max-w-7xl ">
                <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align="right"
                      variant="body2"
                      color="teal"
                    >
                      2021 - Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: "secondary.light" }} />
                      <TimelineDot color="secondary">
                        <SchoolRoundedIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography
                        variant=""
                        color="blue"
                        className="text-xl"
                        component="span"
                      >
                        Under Graduate
                      </Typography>
                      <br></br>
                      <Typography color="grey" variant="" className={`text-sm`}>
                        Guru Ghasidas University, Bilaspur
                      </Typography>
                      <br></br>
                      <Typography
                        variant=""
                        color=""
                        className={`text-xs text-opacity-70`}
                      >
                        Bachelor of Technology<br></br> Electronics And
                        Communications Engineering
                      </Typography>
                      <br></br>
                      <Typography
                        color="lightblue"
                        variant=""
                        className={`text-sm `}
                      >
                        CGPA - 8.6
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      variant="body2"
                      color="teal"
                    >
                      2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot color="primary" variant="outlined">
                        <MenuBookSharpIcon />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: "secondary.light" }} />
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography
                        variant=""
                        color="orange"
                        className="text-xl"
                        component="span"
                      >
                        JEE Advanced
                      </Typography>
                      <br />
                      <Typography
                        color="lightblue"
                        variant=""
                        className={`text-sm `}
                      >
                        AIR - 27553
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align="right"
                      variant="body2"
                      color="teal"
                    >
                      2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: "secondary.light" }} />
                      <TimelineDot color="primary" variant="outlined">
                        <MenuBookSharpIcon />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: "secondary" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography
                        variant=""
                        color="blue"
                        className="text-xl"
                        component="span"
                      >
                        Class 12
                      </Typography>
                      <br />
                      <Typography color="grey" variant="" className={`text-sm`}>
                        Narayana Institutes, Visakhapatnam
                      </Typography>
                      <br />
                      <Typography
                        color="lightblue"
                        variant=""
                        className={`text-sm `}
                      >
                        MPC (98%)
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      variant="body2"
                      color="teal"
                    >
                      2019 - 2007
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: "secondary" }} />
                      <TimelineDot color="secondary">
                        <AccountBalanceRoundedIcon />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: "secondary.light" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography
                        variant=""
                        color="orange"
                        className="text-xl"
                        component="span"
                      >
                        Class 10
                      </Typography>
                      <br />
                      <Typography color="grey" variant="" className={`text-sm`}>
                        St Ann's Convent School
                      </Typography>
                      <br />
                      <Typography
                        color="lightblue"
                        variant=""
                        className={`text-sm `}
                      >
                        ICSE (94%)
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
