"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center py-4 border-t border-gray-700 text-gray-400 text-sm">
      <p>
        Powered by <span className="text-white font-semibold">Next.js</span>,
        Deployed on{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Vercel
        </a>
      </p>
    </footer>
  );
};

export default Footer;
