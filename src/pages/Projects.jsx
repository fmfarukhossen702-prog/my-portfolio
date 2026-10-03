import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { FaGithub, FaExternalLinkAlt, FaFolder, FaCode } from "react-icons/fa";

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

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projectData = [
    {
      id: 1,
      title: "Interactive E-Commerce UI",
      category: "React",
      description:
        "A feature-rich e-commerce store with product filtering, dynamic cart management, and responsive layout built using React and Tailwind CSS.",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Swiper JS"],
      github: "https://github.com/fmfarukhossen702-prog",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Personal Developer Portfolio",
      category: "React",
      description:
        "A VS-Code inspired portfolio website showcasing interactive animations, project showcases, and a dark terminal theme.",
      tech: ["React.js", "Framer Motion", "Tailwind CSS", "React Icons"],
      github: "https://github.com/fmfarukhossen702-prog",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Interactive Form & Component Suite",
      category: "JavaScript",
      description:
        "Custom authentication interfaces featuring real-time input validation, ripple click effects, and keyframe animations.",
      tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Custom Keyframes"],
      github: "https://github.com/fmfarukhossen702-prog",
      live: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Full-Stack MERN Application",
      category: "Upcoming",
      description:
        "An upcoming end-to-end full-stack web app featuring REST API endpoints, JWT authentication, and MongoDB database integration.",
      tech: ["Node.js", "Express.js", "MongoDB", "React.js"],
      github: "https://github.com/fmfarukhossen702-prog",
      live: "#",
      featured: false,
    },
  ];

  const categories = ["All", "React", "JavaScript", "Upcoming"];

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((item) => item.category === filter);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-6xl p-5 font-mono text-white sm:p-8 md:p-12"
    >
      {/* Sub-heading */}
      <motion.h2
        variants={itemVariants}
        className="text-sm text-[#2effdcd6] mb-2"
      >
        // 05. MY WORK & PROJECTS
      </motion.h2>

      {/* Main Title */}
      <motion.h1
        variants={itemVariants}
        className="mb-4 text-3xl font-extrabold tracking-tight text-white font-syne md:text-4xl"
      >
        Things I've <span className="text-[#FF6FD8]">Built</span>.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-[13px] text-[#ffffff86] leading-6 tracking-[0.5px] max-w-xl mb-8"
      >
        A collection of web development projects highlighting my journey with
        React.js, Tailwind CSS, JavaScript animations, and UI/UX architecture.
      </motion.p>

      {/* Filter Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(cat)}
            className={`text-xs px-3.5 py-1.5 rounded-xs transition-all border ${
              filter === cat
                ? "bg-[#2effdcd6] text-[#070707] font-bold border-[#2effdcd6]"
                : "bg-[#222222] text-[#bbb9b9] border-[#ffffff15] hover:border-[#2effdcd6] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="bg-[#222222] border border-[#ffffff15] p-6 rounded-md hover:border-[#ffffff35] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Icons & Tag */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-[#2effdcd6]">
                    <FaFolder className="text-xl" />
                    {project.featured && (
                      <span className="text-[10px] bg-[#272727] text-[#FF6FD8] border border-[#FF6FD8]/30 px-2 py-0.5 rounded-xs">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#bbb9b9]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#2effdcd6] transition-colors"
                      title="View Code"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#FF6FD8] transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-syne mb-2 group-hover:text-[#2effdcd6] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-[#ffffff86] leading-5 mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#ffffff10]">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] bg-[#1c1c1c] border border-[#ffffff15] px-2 py-0.5 rounded-xs text-[#bbb9b9]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
