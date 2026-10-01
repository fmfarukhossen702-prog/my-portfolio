import React from "react";
import { MdMan4, MdTextsms } from "react-icons/md";
import { RiFileFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import Typewriter from "typewriter-effect";
import { activeDataReducer, fileNavActiveDataReducer } from "../redux/dataStor";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaGithub, FaLongArrowAltUp } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaSquareTwitter } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { motion } from "framer-motion";

// এনিমেশনের কনফিগারেশন (Parent & Child Container)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // প্রতিটি চাইল্ড এলিমেন্ট ০.১৫ সেকেন্ড পর পর আসবে
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

const Home = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-12"
    >
      {/* Hello World Heading */}
      <motion.h2 variants={itemVariants} className="text-sm text-[#2effdcd6]">
        // hello world !! Welcome to my portfolio
      </motion.h2>

      {/* Name Title */}
      
      <motion.div
        variants={itemVariants}
        className="text-4xl font-extrabold mt-5"
      >
        <h1 className="text-white text-5xl font-syne tracking-[-5px]">
          F <span className="text-[55px]">a</span>{" "}
          <span className="text-[55px]">r</span>{" "}
          <span className="text-[55px]">u</span>{" "}
          <span className="text-[55px]">k</span>
        </h1>

        <h1 className="text-[#FF6FD8] font-syne text-5xl tracking-[-5px]">
          H <span className="text-[55px]">o</span>{" "}
          <span className="text-[55px]">s</span>{" "}
          <span className="text-[55px]">e</span>{" "}
          <span className="text-[55px]">n</span>
        </h1>
      </motion.div>

      {/* Line Divider */}
      <motion.div
        variants={itemVariants}
        className="mt-2 mb-2.5 bg-[linear-gradient(to_right,#FF6FD8_0%,#FF6FD8_20%,#1C1C1C_100%)] w-86.25 h-0.5"
      />

      {/* Tags Badges */}
      <motion.ul
        variants={itemVariants}
        className="flex text-[11px] gap-2 text-[#bbb9b9]"
      >
        <li className="flex bg-[#272727] gap-2 border py-1.5 px-3 rounded-xs border-[#cccaca5c] items-center">
          <span className="bg-[#2c52fcc6] h-1.5 w-1.5 rounded-full inline-block"></span>
          <h3>Frontend Developer</h3>
        </li>
        <li className="flex bg-[#272727] gap-2 border py-1.5 px-3 rounded-xs border-[#cccaca5c] items-center">
          <span className="bg-[#31f6e9a5] h-1.5 w-1.5 rounded-full inline-block"></span>
          <h3>React / UI Specialist</h3>
        </li>
        <li className="flex bg-[#272727] gap-2 border py-1.5 px-3 rounded-xs border-[#cccaca5c] items-center">
          <span className="bg-[#FF6FD8] h-1.5 w-1.5 rounded-full inline-block"></span>
          <h3 className="text-[#ff6fd9d1]">Aspiring Full-Stack Dev</h3>
        </li>
      </motion.ul>

      {/* Typewriter Section */}
      <motion.div variants={itemVariants}>
        <div className="mt-4 text-[11px] font-mono font-normal tracking-[1px] text-[#ffffff67]">
          <Typewriter
            options={{
              strings: [
                "Turning designs into interactive websites ✨",
                "Specializing in Frontend & React Ecosystem ⚛️",
                "Building scalable web applications 🌐",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>
      </motion.div>

      {/* About Description */}
      <motion.div variants={itemVariants}>
        <p className="text-[13px] font-mono font-normal mt-6 max-w-125 leading-6 tracking-[0.75px] [word-spacing:4px] text-[#ffffff67]">
          I build <span className="text-[#2effdcd6] font-bold">clean</span> and{" "}
          <span className="text-[#FF6FD8] font-bold">pixel-perfect</span> web
          interfaces using{" "}
          <span className="text-[#2effdcd6] font-bold">React</span>. Passionate
          about creating fast, responsive apps and growing into a{" "}
          <span className="text-[#FF6FD8] font-bold">Full-Stack</span>{" "}
          developer.
        </p>
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div variants={itemVariants}>
        <ul className="mt-6 flex items-center gap-5 font-ui text-[#ffffffa5]">
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              dispatch(activeDataReducer({ id: 5, name: "projects.js" }));
              dispatch(fileNavActiveDataReducer({ id: 5, name: "project.js" }));
            }}
            className="cursor-pointer flex items-center px-4 py-2 rounded-xs gap-2 bg-[#2effdcd6] border border-[#ffffff26] font-ui text-[#5e1bf9]"
          >
            <RiFileFill className="text-[#070707c6] text-[12px]" />
            <span className="text-[11px] font-ui font-normal">Project</span>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              dispatch(activeDataReducer({ id: 2, name: "about.html" }));
              dispatch(fileNavActiveDataReducer({ id: 2, name: "about.html" }));
            }}
            className="cursor-pointer flex items-center px-4 py-2 rounded-xs gap-2 bg-[#292828af] border border-[#ffffffee] font-ui text-[#ffffffa5]"
          >
            <MdMan4 className="text-[#e3e3e0] text-[12px]" />
            <span className="text-[11px] font-ui font-normal">About me</span>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              dispatch(activeDataReducer({ id: 3, name: "contact.ts" }));
              dispatch(fileNavActiveDataReducer({ id: 3, name: "contact.ts" }));
            }}
            className="cursor-pointer flex items-center px-4 py-2 rounded-xs gap-2 bg-[#292828af] border border-[#ffffffee] font-ui text-[#ffffffa5]"
          >
            <MdTextsms className="text-[#edede9] text-[12px]" />
            <span className="text-[11px] font-ui font-normal">Contact</span>
          </motion.li>
        </ul>
      </motion.div>

      {/* Stats Cards Grid */}
      <motion.ul
        variants={itemVariants}
        className="mt-10 grid grid-cols-4 h-23 w-full border border-[#ffffff15] rounded-md bg-[#222222]"
      >
        <li className="col-span-1 flex flex-col border-r hover:bg-[#272727ca] border-r-[#00000024] items-center justify-center gap-2">
          <h2 className="text-xl text-white font-bold">
            1<sup className="text-sm font-bold">+</sup>
          </h2>
          <p className="text-[11px] text-[#818181f6]">YEARS</p>
        </li>
        <li className="col-span-1 flex flex-col border-r hover:bg-[#272727ca] border-r-[#00000024] items-center justify-center gap-2">
          <h2 className="text-xl text-white font-bold">
            10<sup className="text-sm font-bold">+</sup>
          </h2>
          <p className="text-[11px] text-[#818181f6]">PROJECTS</p>
        </li>
        <li className="col-span-1 flex flex-col border-r hover:bg-[#272727ca] border-r-[#00000024] items-center justify-center gap-2">
          <h2 className="text-xl text-white font-bold">
            <HiOutlineLightBulb />
          </h2>
          <p className="text-[11px] text-[#818181f6] uppercase">Curiosity</p>
        </li>
        <li className="col-span-1 flex flex-col border-r hover:bg-[#272727ca] border-r-[#00000024] items-center justify-center gap-2">
          <h2 className="text-xl text-white font-bold">
            <FaLongArrowAltUp />
          </h2>
          <p className="text-[11px] text-[#818181f6] uppercase">
            Always Learning
          </p>
        </li>
      </motion.ul>

      {/* Social Links */}
      <motion.ul
        variants={itemVariants}
        className="mt-4 flex gap-3 text-[10px]! text-[#a2a2a2c9]"
      >
        <li>
          <a
            href="https://github.com/fmfarukhossen702-prog"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 hover:bg-[#3f693a3f] border border-[#ffffff25] rounded-xs flex items-center gap-2"
          >
            <FaGithub className="text-white! text-[13px]" />
            <h4 className="tracking-[1px]">GitHub</h4>
          </a>
        </li>
        <li>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 hover:bg-[#19626a4e] border border-[#ffffff25] rounded-xs flex items-center gap-2"
          >
            <AiOutlineLinkedin className="text-[#48f41d] text-[13px]" />
            <h4 className="tracking-[1px]">LinkedIn</h4>
          </a>
        </li>
        <li>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 hover:bg-[#7c47752d] border border-[#ffffff25] rounded-xs flex items-center gap-2"
          >
            <FaSquareTwitter className="text-[#3fe6f9] text-[13px]" />
            <h4 className="tracking-[1px]">Twitter</h4>
          </a>
        </li>
        <li>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 hover:bg-[#3534344c] border border-[#ffffff25] rounded-xs flex items-center gap-2"
          >
            <SiFacebook className="text-[#f93fc7] text-[13px]" />
            <h4 className="tracking-[1px]">Facebook</h4>
          </a>
        </li>
      </motion.ul>
    </motion.div>
  );
};

export default Home;
