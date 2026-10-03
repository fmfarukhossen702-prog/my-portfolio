import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchReducer } from "../redux/dataStor";
import { LuCrosshair } from "react-icons/lu";
// import { useDispatch, useSelector } from "react-redux";
import { activeDataReducer, fileNavActiveDataReducer } from "../redux/dataStor";

const SearchBtn = () => {
  const list = useSelector((state) => state.dataStor.navData);
  console.log(list);
  const activeList = useSelector((state) => state.dataStor.activeData);
  const dispatch = useDispatch();
  const searchContent = useSelector((state) => state.dataStor.search);

  const [searchText, setSearchText] = useState("");

  const filterList = list.filter((item) => {
    return item.name.toLowerCase().includes(searchText.toLocaleLowerCase());
  });

  return (
    <div
      onClick={() => dispatch(searchReducer(false))}
      className=" w-full absolute top-0 left-0 z-50 h-full bg-[#000000c3] flex justify-center items-center  "
    >
      {searchContent && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="max-h-[80dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-md border border-[#ffffff27] bg-[#2D2D30] sm:max-h-none sm:w-[40%]"
        >
          {/* start content  */}
          <div>
            {/* first part  */}
            <div>
              <div className=" text-[#ffffff74] py-2 flex justify-between items-center px-5 border-b border-b-[#fff2] ">
                <div className=" w-full flex items-center">
                  <span className=" text-[11px] pr-2 ">{" > "} </span>
                  <input
                    type="search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder=" Go to file or run command... "
                    className=" w-full pr-2 outline-none text-white "
                    name=""
                    id=""
                  />
                </div>
                <h5 className=" text-[11px] px-2 py-1   bg-[#a5a0a018] rounded-sm ">
                  Esc
                </h5>
              </div>

              <h3 className=" text-[#ffffff74] text-[11px] tracking-[2px] px-5 border-b border-b-[#ffffff20] ">
                COMMANDS
              </h3>

              <div className=" h-10  text-[#ffffff74] flex justify-between items-center px-5 ">
                <div className=" flex gap-3 text-[#bd42cacc] items-center ">
                  <LuCrosshair className=" text-lg font-bold " />
                  <h2 className=" font-extrabold text-[13px]   ">
                    {" "}
                    Open Copilot{" "}
                  </h2>
                </div>
                <button className=" px-2 py-0.5 text-[11px] tracking-[1px] rounded-sm bg-[#a5a0a018] ">
                  {" "}
                  Ctrl+Shift+C{" "}
                </button>
              </div>
              <h6 className=" pb-0.5 px-5 text-[11px] tracking-[1px] text-[#ffffff74] border-b border-b-[#ffffff2e] ">
                FILES
              </h6>
            </div>

            {/* secend part  */}

            <ul className="flex flex-col mt-3 ">
              {filterList.map((items) => {
                const Icon = items.Icon;

                return (
                  <li
                    onClick={() => {
                      (dispatch(
                        activeDataReducer({
                          name: items.name,
                          id: items.id,
                          folder: items.folder,
                        }),
                      ),
                        dispatch(
                          fileNavActiveDataReducer({
                            name: items.name,
                            id: items.id,
                          }),
                        ),
                        dispatch(searchReducer(false)));
                    }}
                    key={items.id ?? items.name}
                    className={` ${activeList.id == items.id ? " bg-[#3f3f3f] border-l-[1.5px] border-l-[#0d82f8] hover:bg-[#3f3f3f] " : "border-transparent"}   flex pl-5 py-1.5 justify-between hover:bg-[#4140407a] duration-200 cursor-pointer items-center text-white`}
                  >
                    <div className=" flex gap-2 items-center ">
                      <Icon className={`${items.color} text-lg `} />
                      <span
                        className={` ${activeList.id == items.id ? " text-white " : "text-[#aaa8a8a5]"}    text-[11px]    `}
                      >
                        {items.name}
                      </span>
                    </div>
                    <span
                      className={` ${activeList.id == items.id ? " text-white " : "text-[#aaa8a8a5]"} pr-5 text-[11px] `}
                    >
                      {items.folder}
                    </span>
                  </li>
                );
              })}
            </ul>
            {/* thard part  */}
            <div className=" bg-[#00000041] py-2 px-5 flex justify-between items-center text-[#aaa7a7ac] text-[10px] ">
              <p>navigate</p>
              <p> open AI chat</p>
            </div>
          </div>
          {/* end content  */}
        </div>
      )}
    </div>
  );
};

export default SearchBtn;
