"use client";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 text-center md:text-left"
    >
      {/* Profile Image with Soft Glow & Animation */}
      <motion.img
        src="/profile.png"
        alt="Mansi Patel"
        className="w-72 h-72 rounded-full shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_50px_rgba(255,165,0,0.4)] md:mr-10"
        initial={{ opacity: 0, scale: 1, y: 2 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 5, ease: "easeOut", delay: 0.2 }}
      />
      {/* About Me Section - Now on Right */}
      <motion.div
        className="md:w-1/2 text-white mt-6 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl tracking-wide font-[Inter]">
          Hi, I'm Mansi Patel
        </h1>
        <p className="text-lg text-gray-400 mt-3 font-[Inter]">
          A <b>Software Engineer</b> passionate about crafting seamless user
          experiences with <b>React, TypeScript, </b>
          and <b>modern UI frameworks.</b>
        </p>
        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block border-2 border-orange-500 text-orange-500 px-6 py-3 text-lg font-semibold uppercase tracking-wider rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 font-[Inter]"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};
export default Hero;
