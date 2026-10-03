import React from "react";
import { motion } from "framer-motion";

// Icons
import {
  FaCode,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

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

const Skill = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 85, icon: FaReact, color: "#61DAFB" },
        {
          name: "JavaScript (ES6+)",
          level: 82,
          icon: FaJsSquare,
          color: "#F7DF1E",
        },
        { name: "HTML5", level: 88, icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", level: 85, icon: FaCss3Alt, color: "#1572B6" },
        {
          name: "Tailwind CSS",
          level: 88,
          icon: SiTailwindcss,
          color: "#38BDF8",
        },
        { name: "Bootstrap", level: 80, icon: FaBootstrap, color: "#7952B3" },
        { name: "Redux Toolkit", level: 75, icon: SiRedux, color: "#764ABC" },
        { name: "Framer Motion", level: 78, icon: SiFramer, color: "#FF6FD8" },
      ],
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git & GitHub", level: 85, icon: FaGitAlt, color: "#F05032" },
        { name: "VS Code", level: 88, icon: FaCode, color: "#007ACC" },
      ],
    },
    {
      title: "Upcoming Backend Roadmap",
      skills: [
        { name: "Node.js", level: 30, icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", level: 25, icon: SiExpress, color: "#FFFFFF" },
        { name: "MongoDB", level: 25, icon: SiMongodb, color: "#47A248" },
      ],
    },
  ];

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
        // SKILLS & PROFICIENCY
      </motion.h2>

      {/* Main Title */}
      <motion.h1
        variants={itemVariants}
        className="mb-4 text-3xl font-extrabold tracking-tight text-white font-syne md:text-4xl"
      >
        My <span className="text-[#FF6FD8]">Technical</span> Skills Range.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-[13px] text-[#ffffff86] leading-6 tracking-[0.5px] max-w-xl mb-10"
      >
        A detailed breakdown of my proficiency in web technologies and tools,
        with active progress tracking for frontend mastery and backend
        integration.
      </motion.p>

      {/* Skills Range Grid */}
      <motion.div variants={itemVariants} className="space-y-8">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="rounded-md border border-[#ffffff15] bg-[#222222] p-4 sm:p-6"
          >
            <h3 className="text-sm font-bold text-[#2effdcd6] mb-6 flex items-center gap-2">
              <FaTools /> {category.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              {category.skills.map((skill, sIdx) => {
                const Icon = skill.icon;
                return (
                  <div key={sIdx} className="space-y-1.5">
                    {/* Header Info */}
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2">
                        <Icon
                          style={{ color: skill.color }}
                          className="text-base"
                        />
                        <span className="text-[#bbb9b9] font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[#2effdcd6] text-[11px] font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Ultra Slim Progress Bar Container */}
                    <div className="w-full bg-[#151515] h-[3px] rounded-full overflow-hidden border border-[#ffffff0a]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}aa 0%, ${skill.color} 100%)`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skill;
