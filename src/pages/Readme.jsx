import React from "react";
import { motion } from "framer-motion";

// Icons
import {
  FaBookOpen,
  FaTerminal,
  FaCodeBranch,
  FaUserGraduate,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";
// import { MdQuickreferenceApi } from "react-icons/md"; // Guaranteed export in react-icons/md

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const Readme = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-5xl p-5 font-mono text-white sm:p-8 md:p-12"
    >
      {/* Sub-heading */}
      <motion.h2
        variants={itemVariants}
        className="text-sm text-[#2effdcd6] mb-2"
      >
        // DOCUMENTATION & OVERVIEW
      </motion.h2>

      {/* Main Title */}
      <motion.h1
        variants={itemVariants}
        className="mb-4 flex flex-wrap items-center gap-3 text-3xl font-extrabold tracking-tight text-white font-syne md:text-4xl"
      >
        <FaBookOpen className="text-[#FF6FD8]" /> README
        <span className="text-[#2effdcd6]">.md</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-[13px] text-[#ffffff86] leading-6 tracking-[0.5px] max-w-xl mb-8"
      >
        A markdown-inspired breakdown of my developer profile, workflow
        standards, core philosophy, and ongoing learning goals.
      </motion.p>

      {/* Main Markdown-like Container */}
      <motion.div
        variants={itemVariants}
        className="bg-[#222222] border border-[#ffffff15] rounded-md overflow-hidden"
      >
        {/* Markdown File Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ffffff15] bg-[#1c1c1c] px-4 py-3 text-xs text-[#ffffff86] sm:px-5">
          <div className="flex items-center gap-2">
            <FaTerminal className="text-[#2effdcd6]" />
            <span className="text-white font-bold">
              faruk-hossen / README.md
            </span>
          </div>
          <span className="text-[10px] bg-[#272727] px-2 py-0.5 rounded border border-[#ffffff10] text-[#2effdcd6]">
            Markdown Preview
          </span>
        </div>

        {/* Markdown Body Content */}
        <div className="space-y-8 p-4 text-xs leading-6 text-[#ffffffa6] sm:p-6 md:p-8">
          {/* Section 1: Intro */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-[#ffffff10] pb-2">
              <span className="text-[#FF6FD8]">#</span> Faruk Hossen — Frontend
              Developer
            </h3>
            <p>
              Welcome to my portfolio! I am a passionate{" "}
              <span className="text-[#2effdcd6] font-bold">
                Frontend Developer
              </span>{" "}
              based in Bangladesh, dedicated to crafting fast, responsive, and
              aesthetically pleasing web interfaces using the React ecosystem.
            </p>
          </div>

          {/* Section 2: Quick Status */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-[#ffffff10] pb-2">
              <span className="text-[#2effdcd6]">##</span>{" "}
              {/* <MdQuickreferenceApi /> */}
              Current Status & Focus
            </h3>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#FF6FD8]">⚡</span>
                <span>
                  <strong className="text-white">Education:</strong> Currently
                  pursuing my Degree Program.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2effdcd6]">🎓</span>
                <span>
                  <strong className="text-white">Full-Stack Course:</strong>{" "}
                  Frontend module successfully completed; preparing for upcoming
                  Backend classes (Node.js, Express, MongoDB).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38bdf8]">💻</span>
                <span>
                  <strong className="text-white">Active Stack:</strong>{" "}
                  React.js, JavaScript (ES6+), Tailwind CSS, Redux Toolkit,
                  Framer Motion, Git & GitHub.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3: Development Guidelines / Best Practices */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-[#ffffff10] pb-2">
              <span className="text-[#2effdcd6]">##</span> <FaCodeBranch /> Code
              Quality & Workflow
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="bg-[#1c1c1c] border border-[#ffffff10] p-4 rounded-xs">
                <h4 className="text-white font-bold mb-1 flex items-center gap-2 text-[11px]">
                  <FaLightbulb className="text-[#F7DF1E]" /> Component-Driven
                  Design
                </h4>
                <p className="text-[11px] text-[#ffffff76]">
                  Writing reusable, clean, and well-structured React components
                  with predictable state management.
                </p>
              </div>

              <div className="bg-[#1c1c1c] border border-[#ffffff10] p-4 rounded-xs">
                <h4 className="text-white font-bold mb-1 flex items-center gap-2 text-[11px]">
                  <FaUserGraduate className="text-[#2effdcd6]" /> Continuous
                  Growth
                </h4>
                <p className="text-[11px] text-[#ffffff76]">
                  Constantly updating skills through hands-on practice,
                  mentorship guidance, and modern web docs.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Footer Note */}
          <div className="pt-4 border-t border-[#ffffff10] flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#ffffff60] gap-2">
            <span>Built with React, Tailwind CSS & Framer Motion</span>
            <span className="flex items-center gap-1">
              Crafted with <FaHeart className="text-[#FF6FD8] text-[10px]" /> by
              Faruk Hossen
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Readme;
