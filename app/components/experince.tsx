"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "Ramp",
    duration: "2023 - Present",
    details: [
      "Developed highly responsive UI components in React and TypeScript.",
      "Optimized performance, reducing load times by 30%.",
      "Integrated third-party APIs for seamless financial transactions.",
    ],
  },
  {
    role: "Software Developer",
    company: "LIC",
    duration: "2021 - 2023",
    details: [
      "Built an insurance management system using Angular and Spring Boot.",
      "Created dynamic dashboards for agents and admins.",
      "Integrated payment gateways and policy comparison tools.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "XYZ Startup",
    duration: "2019 - 2020",
    details: [
      "Designed an AI-powered chatbot using LangChain for enhanced customer support.",
      "Developed a network monitoring dashboard for SD-LAN analysis.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-100 dark:bg-gray-900 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-10 text-gray-900 dark:text-white tracking-wide">
        Experience
      </h2>
      <VerticalTimeline lineColor="#FF6600">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#1a1a2e",
              color: "#fff",
              borderRadius: "8px",
              textAlign: "left" /* ✅ Align text better */,
            }}
            contentArrowStyle={{ borderRight: "7px solid #1a1a2e" }}
            date={exp.duration}
            iconStyle={{ background: "#FF6600", color: "#fff" }}
            icon={<FaBriefcase />}
            position={index % 2 === 0 ? "left" : "right"} // ✅ Alternating positions
          >
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <h4 className="text-lg font-light">{exp.company}</h4>
            <ul className="mt-3 list-disc list-inside text-gray-300">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
