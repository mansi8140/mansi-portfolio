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
              I&apos;m <span className="font-bold text-white">Mansi Patel</span>
              , a passionate and results-driven Software Developer dedicated to
              building scalable and high-performance applications that drive
              business success.
            </p>
            <p className="text-lg text-gray-400 mt-3 font-[Inter] ">
              With a Master&apos;s degree in Computer Science from the
              <a
                href="https://www.uta.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-red-400 px-1 underline"
              >
                University of Texas at Arlington,
              </a>
              I have gained valuable experience in building robust web
              applications, optimizing performance, and solving complex software
              challenges.{" "}
            </p>{" "}
            <p className="text-lg text-gray-400 mt-3 font-[Inter]">
              At <span className="font-bold text-white">BE Networks</span>,I
              have worked on software development, AI-powered solutions, and
              system performance optimization, contributing to projects that
              drive business efficiency. Previously, at{" "}
              <span className="font-bold text-white">Moltech</span>, I was
              involved in developing web solutions that optimized business
              operations, implementing automation workflows, and enhancing UI/UX
              for enterprise applications.
            </p>
            <p className="text-lg text-gray-400 mt-3 font-[Inter]">
              I am committed to continuous learning, exploring new technologies,
              and improving existing systems to create meaningful and impactful
              digital experiences. Writing{" "}
              <em>clean, efficient, and optimized code</em> is my mantra!
            </p>
          </motion.div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "JavaScript",
                "TypeScript",
                "Java",
                "React",
                "Next.js",
                "Angular",
                "Framer Motion",
                "API",
                "Spring Boot",
                "NestJs",
                "Tailwind CSS",
                "SCSS",
                "MYSQL",
                "MongoDB",
                "Git",
                "Tortoise",
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
