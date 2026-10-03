import React from "react";
import { motion } from "framer-motion";

// Icons
import { FaLaptopCode } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

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

const Experiences = () => {
  const experiences = [
    {
      title: "Frontend Developer (Personal & Client Projects)",
      company: "Self-Employed / Independent",
      period: "2023 - Present",
      icon: FaLaptopCode,
      color: "#2effdcd6",
      description: [
        "Built responsive and pixel-perfect web applications using React.js and Tailwind CSS.",
        "Integrated Redux Toolkit for complex application state management.",
        "Created custom interactive UI components and CSS keyframe animations.",
      ],
      skills: ["React.js", "JavaScript", "Tailwind CSS", "Redux", "Git"],
    },
    {
      title: "Frontend Web Development Journey",
      company: "Interactive Learning & Mentorship",
      period: "2023 - 2024",
      icon: FaGraduationCap,
      color: "#FF6FD8",
      description: [
        "Mastered core web fundamentals: HTML5, CSS3, JavaScript (ES6+), and DOM Manipulation.",
        "Learned version control with Git & GitHub workflow for staging, committing, and pushing repositories.",
        "Created modern slider carousels using libraries like Swiper JS and React-Slick.",
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
    },
    {
      title: "Upcoming: Full-Stack Expansion",
      company: "Backend Roadmap",
      period: "Upcoming",
      icon: FaRocket,
      color: "#31f6e9a5",
      description: [
        "Preparing to start formal training in Backend Technologies.",
        "Plan to learn Node.js, Express.js, and MongoDB to become a Full-Stack Software Engineer.",
      ],
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
  ];

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
        // 04. MY EXPERIENCE & JOURNEY
      </motion.h2>

      {/* Main Title */}
      <motion.h1
        variants={itemVariants}
        className="mb-4 text-3xl font-extrabold tracking-tight text-white font-syne md:text-4xl"
      >
        Where I've <span className="text-[#FF6FD8]">Worked</span> & Grown.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-[13px] text-[#ffffff86] leading-6 tracking-[0.5px] max-w-xl mb-10"
      >
        A timeline of my growth as a Frontend Developer, focusing on React
        ecosystems, interactive UI/UX, and preparing for Full-Stack development.
      </motion.p>

      {/* Timeline Section */}
      <motion.div
        variants={itemVariants}
        className="relative ml-3 space-y-10 border-l border-[#ffffff15] pl-6 sm:ml-4 sm:pl-8"
      >
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <div key={index} className="relative group">
              {/* Timeline Icon Badge */}
              <div
                className="absolute -left-[37px] top-0 rounded-full border border-[#ffffff25] bg-[#1c1c1c] p-2 text-sm sm:-left-[49px]"
                style={{ color: exp.color }}
              >
                <Icon />
              </div>

              {/* Content Card */}
              <div className="rounded-md border border-[#ffffff15] bg-[#222222] p-4 transition-all hover:border-[#ffffff35] sm:p-6">
                <div className="mb-2 flex flex-col items-start justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="text-base font-bold text-white font-syne">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-[#2effdcd6] mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[10px] bg-[#272727] border border-[#ffffff15] px-2.5 py-1 rounded-xs text-[#818181f6]">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-[12px] text-[#ffffff86]">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FF6FD8] font-bold">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Skills Badges */}
                <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-[#ffffff10]">
                  {exp.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="text-[10px] bg-[#1c1c1c] border border-[#ffffff15] px-2 py-0.5 rounded-xs text-[#bbb9b9]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Experiences;
