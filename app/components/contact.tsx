"use client";

import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-100 bg-gray-900 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-semibold text-center mb-10 text-white tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact me
      </motion.h2>
      <motion.div className="flex justify-center space-x-8">
        <motion.a
          href="https://www.linkedin.com/in/mansi2911/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
        >
          <FaLinkedin className="text-4xl mb-2" />
          <span className="text-lg">LinkedIn</span>
        </motion.a>
        <motion.a
          href="mailto:mansipatel3104@gmail.com"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-gray-300 hover:text-red-500 hover:text-red-400 transition-all duration-300 transform hover:scale-110"
        >
          <FaEnvelope className="text-4xl mb-2" />
          <span className="text-lg">Email</span>
        </motion.a>

        <motion.a
          href="https://github.com/mansi8140"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
        >
          <FaGithub className="text-4xl mb-2" />
          <span className="text-lg">GitHub</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
