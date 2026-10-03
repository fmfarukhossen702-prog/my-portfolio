import React from "react";
import { motion } from "framer-motion";

// Font Awesome Icons
import { FaCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

// Motion Variants
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

const About = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-5xl p-5 font-mono text-white md:p-12"
    >
      {/* Sub-heading */}
      <motion.h2
        variants={itemVariants}
        className="text-sm text-[#2effdcd6] mb-2"
      >
        // 02. ABOUT ME
      </motion.h2>

      {/* Main Title */}
      <motion.h1
        variants={itemVariants}
        className="mb-6 text-3xl font-extrabold tracking-tight text-white font-syne md:text-4xl"
      >
        Designing & Building{" "}
        <span className="text-[#FF6FD8]">Modern Frontend</span> Interfaces.
      </motion.h1>

      {/* Bio Paragraph */}
      <motion.div
        variants={itemVariants}
        className="space-y-4 text-[13px] text-[#ffffff86] leading-6 tracking-[0.5px]"
      >
        <p>
          Hello! I'm <span className="text-white font-bold">Faruk Hossen</span>,
          a passionate{" "}
          <span className="text-[#2effdcd6] font-bold">Frontend Developer</span>{" "}
          based in Bangladesh. I specialize in building fast, interactive, and
          pixel-perfect web applications with clean UI/UX designs.
        </p>
        <p>
          Currently, I am pursuing my{" "}
          <span className="text-white font-bold">Degree Program</span> while
          actively completing a professional{" "}
          <span className="text-[#2effdcd6] font-bold">
            Full-Stack Development Course
          </span>
          . Having completed the Frontend module, I am preparing for my upcoming
          Backend classes to become a complete Full-Stack Software Engineer.
        </p>
      </motion.div>

      {/* Divider Line */}
      <motion.div
        variants={itemVariants}
        className="my-8 bg-[linear-gradient(to_right,#FF6FD8_0%,#2effdcd6_50%,#1C1C1C_100%)] w-full h-[1px]"
      />

      {/* Tech Stack / Skills Section */}
      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
          <FaCode className="text-[#2effdcd6]" /> Technologies I Work With:
        </h3>

        <ul className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2 md:grid-cols-4">
          {[
            { name: "React.js", color: "text-[#31f6e9a5]" },
            { name: "JavaScript (ES6+)", color: "text-[#f7df1e]" },
            { name: "Tailwind CSS", color: "text-[#38bdf8]" },
            { name: "Redux Toolkit", color: "text-[#764abc]" },
            { name: "HTML5 / CSS3", color: "text-[#e34f26]" },
            { name: "Git & GitHub", color: "text-[#f05032]" },
            { name: "Responsive Design", color: "text-[#FF6FD8]" },
            { name: "Framer Motion", color: "text-[#2effdcd6]" },
          ].map((skill, index) => (
            <motion.li
              key={index}
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 bg-[#222222] border border-[#ffffff15] px-3 py-2 rounded-xs text-[#bbb9b9]"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${skill.color} bg-current`}
              />
              <span>{skill.name}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Education & Current Goals */}
      <motion.div
        variants={itemVariants}
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
      >
        <div className="bg-[#222222] border border-[#ffffff15] p-5 rounded-md">
          <FaGraduationCap className="text-2xl text-[#38bdf8] mb-2" />
          <h4 className="text-sm font-bold text-white mb-1">Education</h4>
          <p className="text-[11px] text-[#ffffff86] leading-5">
            Currently studying in{" "}
            <span className="text-white font-medium">Degree Program</span>{" "}
            alongside tech studies.
          </p>
        </div>

        <div className="bg-[#222222] border border-[#ffffff15] p-5 rounded-md">
          <FaLaptopCode className="text-2xl text-[#2effdcd6] mb-2" />
          <h4 className="text-sm font-bold text-white mb-1">Current Focus</h4>
          <p className="text-[11px] text-[#ffffff86] leading-5">
            Frontend development completed; building production-ready React
            projects and UI/UX layouts.
          </p>
        </div>

        <div className="bg-[#222222] border border-[#ffffff15] p-5 rounded-md">
          <FaRocket className="text-2xl text-[#FF6FD8] mb-2" />
          <h4 className="text-sm font-bold text-white mb-1">Next Step</h4>
          <p className="text-[11px] text-[#ffffff86] leading-5">
            Backend classes starting soon (Node.js, Express, MongoDB) to finish
            the Full-Stack roadmap.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
