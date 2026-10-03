import React, { useEffect } from "react";
import SideBar from "./SideBar";
import FileExplor from "./FileExplor";
import { useDispatch, useSelector } from "react-redux";
import FileNavbar from "./FileNavbar";
import BreadCrumb from "./BreadCrumb";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experiences from "../pages/Experiences";
import Projects from "../pages/Projects";
import Readme from "../pages/Readme";
import Skill from "../pages/Skill";
import { fileDirectoryReducer } from "../redux/dataStor";

const MainLayOut = () => {
  const dispatch = useDispatch();
  const fileDirectory = useSelector((state) => state.dataStor.fileDirectory);
  const page = useSelector((state) => state.dataStor.activeData);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      dispatch(fileDirectoryReducer(true));
    }
  }, [dispatch]);

  return (
    <div className="  text-black">
      <div className="relative flex h-dvh w-full overflow-hidden md:h-screen">
        <div
          className={`${fileDirectory ? "md:w-12.5" : "md:w-67.5"} relative z-30 flex h-full w-12.5 shrink-0 overflow-visible transition-[width] duration-500 ease-in-out md:overflow-hidden`}
        >
          <SideBar />
          {!fileDirectory && (
            <div className="absolute left-12.5 top-0 z-30 h-full w-56 shadow-xl md:static md:z-auto md:h-full md:w-auto md:flex-1 md:shadow-none">
              <FileExplor />
            </div>
          )}
        </div>
        {!fileDirectory && (
          <button
            aria-label="Close file explorer"
            onClick={() => dispatch(fileDirectoryReducer(true))}
            className="fixed inset-0 z-20 bg-black/50 md:hidden"
          />
        )}
        <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden bg-[#1C1C1C]">
          <div className="">
            <FileNavbar />
            <BreadCrumb />
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-black [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#333]">
            {page.id === 1 && <Home />}
            {page.id === 2 && <About />}
            {page.id === 3 && <Contact />}
            {page.id === 4 && <Experiences />}
            {page.id === 5 && <Projects />}
            {page.id === 6 && <Skill />}
            {page.id === 7 && <Readme />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayOut;
