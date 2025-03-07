"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center"
    >
      {/* Profile Image */}
      <motion.img
        src="/profile.png" // Ensure this matches the correct path
        alt="Mansi Patel"
        className="w-60 h-60 rounded-lg shadow-lg mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Name & Title */}
      <motion.h1
        className="mt-6 text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Mansi Patel
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        Software Engineer | Frontend Developer
      </motion.p>

      {/* Download Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          // rel="noopener noreferrer"
          className="mt-6 inline-block border-2 border-orange-500 text-orange-500 px-6 py-3 text-lg font-semibold uppercase tracking-wider rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
