"use client";
import React from "react";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Experience from "./components/experince";
import Contact from "./components/contact";
import Hero from "./components/hero";
import About from "./components/about";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
