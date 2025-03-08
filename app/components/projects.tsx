"use client";
import React, { useState } from "react";
import { HiChevronDown, HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Life Insurance Management System",
    subtitle: "Built using Angular & Spring Boot",
    description:
      "A full-stack insurance management app that allows users to compare policies, renew subscriptions, and manage accounts seamlessly.",
    link: "https://github.com/mansi8140/LIC",
  },
  {
    title: "Cloud-Based Storage Application",
    subtitle: "Developed in Java, similar to Google Drive",
    description:
      "A cloud storage system enabling users to upload, store, and share files securely over the internet with role-based access control.",
    link: "https://github.com/mansipatel/cloud-storage",
  },
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle selection
  };
  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-100 bg-gray-900 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-semibold text-center mb-10 text-gray-900 text-white tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Technical Projects
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="mb-3"
          >
            <button
              onClick={() => handleToggle(index)}
              className="flex justify-between items-center w-full p-4 text-lg font-semibold  bg-gray-800 text-white cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-600"
            >
              {project.title}
              <HiChevronDown
                className={`text-2xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <motion.div className="overflow-hidden">
              {openIndex === index && (
                <motion.div
                  initial={false}
                  animate={{
                    opacity: openIndex === index ? 1 : 0,
                    maxHeight: openIndex === index ? "300px" : "0px",
                    padding: openIndex === index ? "1rem" : "0rem",
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="p-4 bg-white  text-gray-800 rounded-md"
                >
                  <em className="block text-sm text-gray-600 text-gray-400">
                    {project.subtitle}
                  </em>
                  <p className="mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-all duration-300"
                  >
                    View Project <HiArrowRight className="text-xl" />
                  </a>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
