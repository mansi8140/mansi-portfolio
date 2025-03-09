"use client";
import React, { useState } from "react";
import { HiChevronDown, HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Life Insurance Management System",
    subtitle: "Angular, Spring Boot, MySQL | Jan '25",
    description:
      "A full-stack insurance management system with secure REST APIs, CRUD operations, and role-based dashboards.",
    link: "https://github.com/mansi8140/LIC",
  },
  {
    title: "Cloud-Based Storage Application",
    subtitle: "Java, Socket Programming | Feb '23 - Apr '23",
    description:
      "Designed a cloud-based storage system using Java Threads, TCP, UDP, and Synchronization concepts.",
    link: "https://github.com/mansipatel/cloud-storage",
  },
  {
    title: "Property Management Portal",
    subtitle: "React.js, Laravel, MySQL, WordPress | Jul '22 - Aug '22",
    description:
      "Built a property management portal to track properties, sales, and revenue distribution.",
    link: "https://github.com/mansipatel/property-portal",
  },
  {
    title: "Cab Booking System",
    subtitle: "MySQL, Python3, Java, JDBC, Oracle | Aug '22 - Dec '22",
    description:
      "Developed a database management system for cab bookings, with ER modeling and a Java-based GUI.",
    link: "https://github.com/mansipatel/cab-booking",
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
