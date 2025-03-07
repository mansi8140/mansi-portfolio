"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";

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
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 px-6">
      <h2 className="text-5xl font-bold text-center mb-10 text-gray-900 dark:text-white tracking-wide">
        Technical Projects
      </h2>

      <div className="max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="mb-3 transition-all duration-300">
                <Disclosure.Button className="flex justify-between items-center w-full p-4 text-lg font-semibold bg-gray-700 dark:bg-gray-800 text-white cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-600">
                  {project.title}
                  <HiChevronDown
                    className={`text-2xl transition-transform duration-300 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="p-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md transition-opacity duration-500">
                  <em className="block text-sm text-gray-600 dark:text-gray-400">
                    {project.subtitle}
                  </em>
                  <p className="mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-blue-500 hover:underline"
                  >
                    View Project →
                  </a>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default Projects;
