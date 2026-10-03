import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeDataReducer, fileNavActiveDataReducer } from "../redux/dataStor";

const FileExplor = ({ className = " " }) => {
  const list = useSelector((state) => state.dataStor.navData);
  const activeList = useSelector((state) => state.dataStor.activeData);
  // console.log(activeList);
  const dispatch = useDispatch();

  return (
    <div
      className={`h-full min-w-0 flex-1 overflow-y-auto border-r border-r-[#ffffff2d] bg-[#232324] pt-16 ${className}`}
    >
      <p className="text-[11px] pl-4  text-[#c3c0c0] font-medium tracking-[1px] ">
        PORTFOLIO
      </p>
      <div className=" pt-2.5">
        <ul className="flex flex-col ">
          {list.map((items) => {
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
                    ));
                }}
                key={items.id ?? items.name}
                className={` ${activeList.id == items.id ? " bg-[#333333] border-l-[1.5px] border-l-[#0d82f8] hover:bg-primary " : "border-transparent"}   flex pl-5 py-1 justify-between hover:bg-[#33333389] duration-200  cursor-pointer items-center text-white`}
              >
                <Icon className={`${items.color} text-lg `} />
                <span
                  className={` ${activeList.id == items.id ? " text-white " : "text-[#aaa8a8a5]"}    text-[11px]    `}
                >
                  {items.name}
                </span>
                <span></span>
                <span></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FileExplor;
