"use client";
import React from "react";
import {
  DisclosurePanel,
  DisclosureButton,
  Disclosure,
} from "@headlessui/react";
import { HiChevronDown, HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Life Insurance Management System",
    subtitle: "Built using Angular & Spring Boot",
    description:
      "A full-stack insurance management app that allows users to compare policies, renew subscriptions, and manage accounts seamlessly.",
    link: "https://github.com/mansipatel/lic-management",
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
  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-900 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold text-center mb-10 text-gray-900 dark:text-white tracking-wide">
        Technical Projects
      </h2>

      <div className="max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              // <div className="mb-3 transition-all duration-300">

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* <Disclosure.Button className="flex justify-between items-center w-full p-4 text-lg font-semibold bg-gray-700 dark:bg-gray-800 text-white cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-600 shadow-lg"> */}

                <DisclosureButton className="flex justify-between items-center w-full p-4 text-lg font-semibold bg-gray-700 dark:bg-gray-800 text-white cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-600">
                  {project.title}
                  <HiChevronDown
                    className={`text-2xl transition-transform duration-300 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="p-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md"
                  >
                    {/* Your Project Description */}
                    <em className="block text-sm text-gray-600 dark:text-gray-400">
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
                </DisclosurePanel>
              </motion.div>
            )}
          </Disclosure>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
