// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
//       style={{ backgroundImage: "url('/background.jpg')" }}
//     >
//       <div className="hero-overlay"></div>

//       {/* Floating GitHub & LinkedIn Icons */}
//       <div className="absolute top-1/3 right-10 flex flex-col space-y-4">
//         <a
//           href="https://github.com/mansipatel"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaGithub className="text-4xl text-gray-300 hover:text-white transition-transform transform hover:scale-110" />
//         </a>
//         <a
//           href="https://linkedin.com/in/mansipatel"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaLinkedin className="text-4xl text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-110" />
//         </a>
//       </div>

//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
//         {/* Left Side: Profile & Text */}
//         <div className="text-center md:text-left max-w-lg">
//           <motion.img
//             src="/profile.png"
//             alt="Mansi Patel"
//             className="w-60 h-60 rounded-lg shadow-lg mx-auto md:mx-0"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//           />
//           <motion.h1
//             className="mt-6 text-4xl font-bold"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2 }}
//           >
//             Mansi Patel
//           </motion.h1>
//           <motion.p
//             className="text-lg text-gray-300"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.4 }}
//           >
//             Software Engineer | Frontend Developer
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center"
    >
      {/* Profile Image */}
      <motion.img
        src="/profile.png" // Ensure this matches the correct path
        alt="Mansi Patel"
        className="w-60 h-60 rounded-lg shadow-lg mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Name & Title */}
      <motion.h1
        className="mt-6 text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Mansi Patel
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        Software Engineer | Frontend Developer
      </motion.p>

      {/* Download Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          // rel="noopener noreferrer"
          className="mt-6 inline-block border-2 border-orange-500 text-orange-500 px-6 py-3 text-lg font-semibold uppercase tracking-wider rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
