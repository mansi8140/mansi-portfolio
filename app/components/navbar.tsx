"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observe sections & update active link
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.6, // When 60% of section is visible, trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        {/* Logo */}
        <span className="text-white text-xl font-semibold">Mansi Patel</span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["home", "experience", "projects", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`transition ${
                activeSection === section
                  ? "text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center space-x-2 text-white"
          onClick={() => setMenuOpen(true)}
        >
          <span className="uppercase text-sm tracking-wider">Menu</span>
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-black text-white flex flex-col transition-all duration-500 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6">
          {/* Logo */}
          <span className="text-white text-xl font-semibold">Mansi Patel</span>
          {/* Close Button */}
          <button className="text-3xl" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col mt-10 space-y-6 tracking-wider uppercase px-6">
          {["home", "experience", "projects", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className={`transition border-b border-gray-700 pb-2 ${
                activeSection === section
                  ? "text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
