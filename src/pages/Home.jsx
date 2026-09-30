import React from "react";
import { MdMan4, MdTextsms } from "react-icons/md";
import { RiFileFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import Typewriter from "typewriter-effect";
import { activeDataReducer } from "../redux/dataStor";

const Home = () => {

    const dispatch = useDispatch()

  return (
    <div className=" p-12 ">
      <h2 className=" text-sm text-[#2effdcd6]   ">
        // hello world !! Welcome to my portfolio
      </h2>
      <div className=" text-4xl font-extrabold  mt-5 ">
        <h1 className=" text-white text-5xl font-syne tracking-[4px] ">
          Faruk
        </h1>

        <h1 className=" text-[#FF6FD8] font-syne text-5xl tracking-[4px] ">
          Hosen
        </h1>

        <div className=" mt-2 mb-2.5 bg-[linear-gradient(to_right,#FF6FD8_0%,#FF6FD8_20%,#1C1C1C_100%)] w-86.25 h-0.5 "></div>

        <ul className="flex text-[11px] gap-2 text-[#bbb9b9]  ">
          <li className="flex bg-[#272727] gap-2 border py-1.5 px-3 rounded-xs border-[#cccaca5c]  items-center ">
            {" "}
            <span className=" bg-[#2c52fcc6]  h-1.5 w-1.5 rounded-full inline-block "></span>{" "}
            <h3>Frontend Developer</h3>{" "}
          </li>
          <li className="flex  bg-[#272727]  gap-2 border py-1.5 px-3 rounded-xs border-[#cccaca5c]  items-center ">
            {" "}
            <span className=" bg-[#31f6e9a5]  h-1.5 w-1.5 rounded-full inline-block "></span>{" "}
            <h3>React / UI Specialist </h3>{" "}
          </li>
          <li className="flex  bg-[#272727]  gap-2 border py-1.5 px-3 rounded-xs border-[#cccaca5c]  items-center ">
            {" "}
            <span className=" bg-[#FF6FD8]  h-1.5 w-1.5 rounded-full inline-block "></span>{" "}
            <h3 className=" text-[#ff6fd9d1] ">
              Aspiring Full-Stack Dev{" "}
            </h3>{" "}
          </li>
        </ul>

        <div>
          <div className="mt-4 text-[11px] font-mono  font-normal tracking-[1px] text-[#ffffff67]">
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
        </div>

        <div>
          <p className="text-[13px] font-mono font-normal mt-6 max-w-125 leading-6 tracking-[0.75px] [word-spacing:4px] text-[#ffffff67]">
            I build <span className="text-[#2effdcd6] font-bold">clean</span>{" "}
            and <span className="text-[#FF6FD8] font-bold">pixel-perfect</span>{" "}
            web interfaces using{" "}
            <span className="text-[#2effdcd6] font-bold">React</span>.
            Passionate about creating fast, responsive apps and growing into a{" "}
            <span className="text-[#FF6FD8] font-bold">Full-Stack</span>{" "}
            developer.
          </p>
        </div>

        <div>
          <ul className=" mt-6 flex font- items-center gap-5 font-ui text-[#ffffffa5] ">
            <li
              onClick={() =>
                dispatch(activeDataReducer({ id: 5, name: "projects.js" }))
              }
              className=" cursor-pointer  flex font- items-center px-4 py-2 rounded-xs gap-2 bg-[#2effdc52] border border-[#ffffff26] font-ui text-[#ffffffa5] "
            >
              {" "}
              <RiFileFill className="  text-[#fcea24] text-[12px] " />
              <span className=" text-[11px] font-ui font-normal ">
                Project{" "}
              </span>{" "}
            </li>
            <li
              onClick={() =>
                dispatch(activeDataReducer({ id: 2, name: "about.html" }))
              }
              className=" cursor-pointer  flex font- items-center px-4 py-2 rounded-xs gap-2 bg-[#292828af] border border-[#ffffffee] font-ui text-[#ffffffa5] "
            >
              {" "}
              <MdMan4 className="  text-[#e3e3e0] text-[12px] " />
              <span className=" text-[11px] font-ui font-normal ">
                About me{" "}
              </span>{" "}
            </li>
            <li
              onClick={() =>
                dispatch(activeDataReducer({ id: 3, name: "contact.ts" }))
              }
              className=" cursor-pointer  flex font- items-center px-4 py-2 rounded-xs gap-2 bg-[#292828af] border border-[#ffffffee] font-ui text-[#ffffffa5] "
            >
              {" "}
              <MdTextsms className="  text-[#edede9] text-[12px] " />
              <span className=" text-[11px] font-ui font-normal ">
                Cantact{" "}
              </span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
