import React from "react";
import { FcSearch } from "react-icons/fc";
import { searchReducer } from "../redux/dataStor";
import { useDispatch } from "react-redux";



const Heading = () => {
    const dispatch = useDispatch()
    // const searchClick = () => {
        
    // }
  return (
    <div className="fixed top-0 left-0 z-10 w-full ">

      {/* search part  */}
      <div className=" pl-4 bg-[#1A1A2E] flex justify-between h-7.5  ">
        <div className="flex items-center gap-2">
          <div className=" bg-[#f56e08] h-3 w-3 rounded-full "> </div>
          <div className=" bg-[#f50808] h-3 w-3 rounded-full "> </div>
          <div className=" bg-[#6bf508] h-3 w-3 rounded-full "> </div>
        </div>
        <div onClick={()=> dispatch(searchReducer(true)) } className=" relative h-6 ">
          <label
            htmlFor=""
            className=" text-[11px]! w-full absolute text-[#8a8580]  flex justify-center gap-4 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <FcSearch className=" text-[14px]!  " />
            <span>faruk hosen </span>
            <span>:</span>
            <span>portfolio</span>
            <div className="flex items-center gap-2">
              <span className="px-1 py-0.50 rounded-sm bg-[#404051] inline-block ">
                {" "}
                Ctrl{" "}
              </span>
              <span className="px-1 py-0.50 rounded-sm bg-[#404051] inline-block ">
                {" "}
                P{" "}
              </span>
            </div>
          </label>
          <input
            type="search"
            readOnly
            // onClick={onSearchClick}
            aria-label="Open file search"
            className="w-84 h-6 cursor-pointer rounded-sm outline-none px-5 border border-[#ffffff26] text-white bg-[#2A2A3D]"
          />
        </div>
        <div> </div>
      </div>

      {/* menu part  */}
      <div className=" pl-5 bg-[#2D2D2D] border border-t-black  border-b border-[#ffffff26] ">
        <ul className=" text-[11px]! py-0.5 flex items-center gap-5 text-[#ffffffb6]">
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Go</li>
          <li>Run</li>
          <li>Terminal</li>
          <li>Help</li>
          <li>Copilot</li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
