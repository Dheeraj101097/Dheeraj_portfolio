import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Heart,
  Zap,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "dheerajap6@gmail.com",
      link: "mailto:dheerajap6@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "760 607 2474",
      link: "tel:+7606072474",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Roorkee, India",
      link: "#",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Dheeraj101097",
      color: "hover:bg-gray-700",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dheerajpatnaik10/",
      color: "hover:bg-blue-600",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com",
      color: "hover:bg-blue-400",
      gradient: "from-sky-400 to-blue-500",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://instagram.com",
      color: "hover:bg-indigo-600",
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
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
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl"
        />

        {/* Floating Hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Heart className="w-4 h-4" />
          </motion.div>
        ))}
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
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div
              className="bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl p-8 text-white mb-8 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/10 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl font-bold mb-6"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Contact Information
                </motion.h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 15, scale: 1.05 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                    >
                      <motion.div
                        className={`p-3 bg-gradient-to-r ${info.color} rounded-full shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold group-hover:text-yellow-200 transition-colors duration-200">
                          {info.title}
                        </h4>
                        <p className="text-white/80 group-hover:text-white transition-colors duration-200">
                          {info.value}
                        </p>
                      </div>
                      <motion.div
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Zap className="w-4 h-4" />
                      </motion.div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                animate={{
                  color: ["#6366F1", "#06B6D4", "#10B981", "#6366F1"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Follow Me
              </motion.h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 10,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-3 bg-white dark:bg-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 ${social.color} relative overflow-hidden group`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <motion.div
                      className="relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {social.icon}
                    </motion.div>
                    <span className="font-medium relative z-10">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              {/* Form Background Animation */}
              <div className="absolute inset-0">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 rounded-full blur-2xl"
                />
              </div>

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Send me a message
                </motion.h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Name
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        whileFocus={{
                          borderColor: "#6366F1",
                          boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                        }}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Your good name"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Email
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        whileFocus={{
                          borderColor: "#06B6D4",
                          boxShadow: "0 0 0 3px rgba(6, 182, 212, 0.1)",
                        }}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="name@example.com"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                  >
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <motion.input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      whileFocus={{
                        borderColor: "#10B981",
                        boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.1)",
                      }}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Project Collaboration"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      whileFocus={{
                        borderColor: "#8B5CF6",
                        boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.1)",
                      }}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                      placeholder="Hey! Dheeraj, I'd like to discuss..."
                    ></motion.textarea>
                  </motion.div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="relative z-10"
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
