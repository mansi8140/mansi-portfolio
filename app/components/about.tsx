"use client";
import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-100 bg-gray-900 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold  mb-10 text-gray-900 text-white tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          A little bit about me 🚀
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6  "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div>
            <p className="text-lg text-gray-400 mt-3 font-[Inter]">
              I’m <span className="font-bold text-white">Mansi Patel</span>, a
              passionate Software Engineer with expertise in frontend
              development. I love crafting seamless user experiences with{" "}
              <strong>React, TypeScript, Angular, and Spring Boot</strong>.
            </p>
            <p className="text-lg text-gray-400 mt-3 font-[Inter]">
              I am also passionate about{" "}
              <strong>Data Structures & Algorithms</strong>, building scalable
              applications, and continuously refining my problem-solving skills.
              Writing <em>clean, efficient, and optimized code</em> is my
              mantra!
            </p>
          </motion.div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "React",
                "Angular",
                "TypeScript",
                "Spring Boot",
                "Tailwind CSS",
                "Data Structures",
                "Algorithms",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
