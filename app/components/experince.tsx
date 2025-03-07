"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Be Networks, Richardson, TX",
    duration: "September,2023 - Present",
    details: [
      "Developed highly responsive UI components in React and TypeScript.",
      "Optimized performance, reducing load times by 30%.",
      "Integrated third-party APIs for seamless financial transactions.",
    ],
    logo: "/be-networks.png", // ✅ Ensure these are placed inside /public
  },
  {
    role: "Software Developer",
    company: "Moltech Solutions, Ahmedabad, India",
    duration: "April, 2021 - December,2021",
    details: [
      "Built an insurance management system using Angular and Spring Boot.",
      "Created dynamic dashboards for agents and admins.",
      "Integrated payment gateways and policy comparison tools.",
    ],
    logo: "/moltech.png",
  },
];

const Experience = () => {
  return (
    <motion.section
      className="py-20 bg-gray-100 dark:bg-gray-900 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id="experience"
      // className="py-20 bg-gray-100 dark:bg-gray-900 px-6"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      {/* Vertical Timeline */}
      <VerticalTimeline lineColor="#FF6600">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#1a1a2e",
              color: "#fff",
              borderRadius: "8px",
              textAlign: "left",
              boxShadow: "0 4px 12px rgba(255, 102, 0, 0.2)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1a1a2e" }}
            date={exp.duration}
            icon={
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaBriefcase />
              </motion.div>
            }
            iconStyle={{
              background: "#FF6600",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
            position={index % 2 === 0 ? "left" : "right"}
          >
            {/* Scroll Animation for Each Entry */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Company Logo */}
              <div className="flex items-center space-x-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-16 h-16 rounded-lg shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <h4 className="text-lg font-light">{exp.company}</h4>
                </div>
              </div>

              {/* Experience Details */}
              <ul className="mt-3 list-disc list-inside text-gray-300">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
};

export default Experience;
