"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    role: "Software Engineer",
    company: "BE Networks, Richardson, TX",
    duration: "January 2024 - Present",
    details: [
      "Developed scalable applications using JavaScript, TypeScript, and NestJS for microservices, optimizing RESTful API performance.",
      "Integrated LangChain AI framework to enhance chatbot capabilities, improving user interactions with prompt engineering.",
      "Refactored system architecture, improving UI performance with CSS optimizations and state management.",
      "Designed & executed manual & automated test cases with Jest, reducing critical bugs by 25% and ensuring 99% uptime.",
      "Collaborated cross-functionally in Agile teams, delivering secure and high-performing software solutions.",
    ],
    logo: "/be-networks.png",
  },
  {
    role: "Software Engineer Intern",
    company: "BE Networks, Richardson, TX",
    duration: "September 2023 - December 2023",
    details: [
      "Designed and optimized UI for SD-LAN solutions, leveraging JavaScript, HTML, and CSS to enhance user experience.",
      "Refactored and optimized codebases with senior developers, leading to a 15% performance improvement and 10% lower maintenance costs.",
    ],
    logo: "/be-networks.png",
  },
  {
    role: "Software Developer",
    company: "Moltech Solutions, Ahmedabad, India",
    duration: "April 2021 - December 2021",
    details: [
      "Developed and deployed five web and mobile applications using React.js, React Native, Bootstrap, and Figma, improving UI by 35%, while independently designing, developing, and testing a mobile app with React Native and Figma.",
      "Optimized performance and deployment by enhancing SEO, implementing CI/CD, improving page load speeds by 15%, reducing downtime by 40%, and revamping web designs using reusable components, prototyping, and WordPress.",
      "Accelerated development cycles and improved UI/UX by implementing reusable components, UI prototyping, and performance tuning, reducing design iteration time by 50% and enhancing feature rollout speed with CI/CD",
    ],
    logo: "/moltech.png",
  },
];

const Experience = () => {
  return (
    <motion.section
      className="py-20 bg-gray-900 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id="experience"
    >
      <motion.h2
        className="text-3xl font-semibold text-center mb-10 text-white tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <VerticalTimeline lineColor="#FF6600">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#fff",
              color: "#1a1a2e",
              borderRadius: "8px",
              textAlign: "left",
              boxShadow: "0 4px 12px rgba(255, 102, 0, 0.2)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1a1a2e" }}
            date={exp.duration}
            dateClassName="text-white"
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
              borderRadius: "50%",
            }}
            position={index % 2 === 0 ? "left" : "right"}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <Image
                  width={50}
                  height={50}
                  src={exp.logo}
                  alt={exp.company}
                  className="w-16 h-16 rounded-lg shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <h4 className="text-lg font-light">{exp.company}</h4>
                  <h5 className="lg:hidden xl:hidden 2xl:hidden text-orange-400">
                    {exp.duration}
                  </h5>
                </div>
              </div>

              {/* Experience Details */}
              <ul className="mt-3 list-disc list-inside text-gary-500">
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
