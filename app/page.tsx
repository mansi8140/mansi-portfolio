"use client";
import React from "react";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Experience from "./components/experince";
import Contact from "./components/contact";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
