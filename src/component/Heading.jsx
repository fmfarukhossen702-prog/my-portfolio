import React from "react";
import { FcSearch } from "react-icons/fc";
import { searchReducer } from "../redux/dataStor";
import { useDispatch } from "react-redux";

const Heading = () => {
  const dispatch = useDispatch();
  // const searchClick = () => {

  // }
  return (
    <div className="fixed top-0 left-0 z-100 w-full ">
      {/* search part  */}
      <div className=" pl-4 bg-[#1A1A2E] flex justify-between h-7  ">
        <div className="flex items-center gap-2">
          <div className=" bg-[#f56e08] h-3 w-3 rounded-full "> </div>
          <div className=" bg-[#f50808] h-3 w-3 rounded-full "> </div>
          <div className=" bg-[#6bf508] h-3 w-3 rounded-full "> </div>
        </div>
        <div
          onClick={() => dispatch(searchReducer(true))}
          className="relative mt-[2px] h-6"
        >
          <label
            htmlFor=""
            className="pointer-events-none absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 text-[11px]! text-[#8a8580] sm:gap-3"
          >
            <FcSearch className=" text-[14px]!  " />
            <span>faruk hosen </span>
            <span>:</span>
            <span>portfolio</span>
            <div className="hidden items-center gap-2 sm:flex">
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
            className="h-6 w-[min(70vw,20.5rem)] cursor-pointer rounded-sm border border-[#ffffff26] bg-[#2A2A3D] px-3 text-white outline-none sm:w-[min(82vw,20.5rem)]"
          />
        </div>
        <div> </div>
      </div>

      {/* menu part  */}
      <div className="overflow-x-auto border border-t-black border-b border-[#ffffff26] bg-[#2D2D2D] pl-5">
        <ul className="flex min-w-max items-center gap-5 py-0.5 text-[11px]! text-[#ffffffb6]">
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
