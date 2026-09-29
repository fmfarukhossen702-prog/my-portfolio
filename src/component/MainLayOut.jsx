import React from "react";
import SideBar from "./SideBar";
import FileExplor from "./FileExplor";
import { useSelector } from "react-redux";
import FileNavbar from "./FileNavbar";
import BreadCrumb from "./BreadCrumb";
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Experiences from '../pages/Experiences'
import Projects from '../pages/Projects'
import Readme from '../pages/Readme'

const MainLayOut = () => {
  const fileDirectory = useSelector((state) => state.dataStor.fileDirectory);
  const page = useSelector((state)=> state.dataStor.activeData)
   console.log(page)
  return (
    <div className="  text-black">
      <div className=" flex ">
        <div
          className={`${fileDirectory ? "w-12.5" : "w-67.5   "} flex h-screen flex-shrink-0 overflow-hidden transition-[width] duration-500 ease-in-out`}
        >
          <SideBar />
          <FileExplor />
        </div>
        <div className=" relative  w-full">
          <FileNavbar />
          <BreadCrumb />
          <div className=" w-full h-screen overflow-hidden overflow-y-scroll absolute top-0 -z-3 left-0  bg-[#1C1C1C] ">
            {page.id === 1 && <Home />}
            {page.id === 2 && <About />}
            {page.id === 3 && <Contact />}
            {page.id === 4 && <Experiences />}
            {page.id === 5 && <Projects />}
            {page.id === 6 && <Projects />}
            {page.id === 7 && <Readme />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayOut;
