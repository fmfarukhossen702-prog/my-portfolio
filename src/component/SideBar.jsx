import React from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { GoFileDirectory } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCrosshair } from "react-icons/lu";
import { VscSearch, VscSourceControl } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { fileDirectoryReducer, searchReducer } from "../redux/dataStor";

const SideBar = () => {
    
    const dispatch = useDispatch();
    const fileDirectory = useSelector((state) => state.dataStor.fileDirectory);


  return (
    <div className=" pt-18 h-screen w-12.5 bg-primary flex flex-col border border-r-[#ffffff1a] items-center justify-between pb-5 ">
      <div className=" text-2xl! text-[#b6b6b6] space-y-5 ">
        <GoFileDirectory
          onClick={() => dispatch(fileDirectoryReducer(!fileDirectory))}
          className="cursor-pointer text-white"
        />
        <VscSearch onClick={()=> {dispatch(searchReducer(true))} } />
        <VscSourceControl />
        <BsFileEarmarkPdf />
        <LuCrosshair />
      </div>
      <div>
        <IoSettingsOutline className="text-[#ccc6c6] font-normal! text-2xl   " />
      </div>
    </div>
  );
};

export default SideBar;
