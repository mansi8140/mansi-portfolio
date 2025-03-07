"use client";

import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900 px-6">
      <h2 className="text-5xl font-bold text-center mb-10 text-gray-900 dark:text-white tracking-wide">
        Contact Me
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-lg">
        Feel free to reach out for collaborations or just a chat!
      </p>

      <div className="flex justify-center space-x-8">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mansipatel"
          className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
        >
          <FaLinkedin className="text-4xl mb-2" />
          <span className="text-lg">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/mansipatel"
          className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:scale-110"
        >
          <FaGithub className="text-4xl mb-2" />
          <span className="text-lg">GitHub</span>
        </a>

        {/* Email */}
        <a
          href="mailto:mansipatel3104@gmail.com"
          className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 transform hover:scale-110"
        >
          <FaEnvelope className="text-4xl mb-2" />
          <span className="text-lg">Email</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
