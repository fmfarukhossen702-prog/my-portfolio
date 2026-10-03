// import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import {
  activeDataReducer,
  deleteReducer,
  fileNavActiveDataReducer,
} from "../redux/dataStor";
import { RxCross1 } from "react-icons/rx";
const FileNavbar = () => {
  const fileNav = useSelector((state) => state.dataStor.fileNavActiveData);
  const navData = useSelector((state) => state.dataStor.navData);
  const activeList = useSelector((state) => state.dataStor.activeData);

  const dispatch = useDispatch();

  const data = navData.filter((nav) =>
    fileNav.find((file) => file.id === nav.id),
  );

  // console.log(data);

  return (
    <div className="h-20 w-full min-w-0 overflow-x-auto bg-[#232324] pt-13">
      <div className="w-max min-w-full">
        <ul className="flex items-center">
          {data.map((items) => {
            const Icon = items.Icon;

            return (
              <li
                onClick={() => {
                  (dispatch(
                    activeDataReducer({
                      name: items.name,
                      id: items.id,
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
                className={` ${activeList.id == items.id ? " bg-[#333333]  border-t-[1.5px] border-t-[#0d82f8] hover:bg-primary " : "border-r border-r-[#ffffff20]"}   flex px-3 py-1 gap-3  hover:bg-[#33333389] cursor-pointer items-center text-white`}
              >
                <Icon className={`${items.color} text-lg `} />

                <span
                  className={` ${activeList.id == items.id ? " text-white " : "text-[#aaa8a8a5]"}    text-[11px]    `}
                >
                  {items.name}
                </span>
                <RxCross1
                  onClick={(e) => {
                    (e.stopPropagation(), dispatch(deleteReducer(items.id)));
                  }}
                  className=" text-[11px] text-[#ffffff99] "
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FileNavbar;
