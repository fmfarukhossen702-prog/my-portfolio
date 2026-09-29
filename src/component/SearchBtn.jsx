import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchReducer } from "../redux/dataStor";

const SearchBtn = () => {
  const dispatch = useDispatch();
  const searchContent = useSelector((state) => state.dataStor.search);

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
          className=" w-[60%] h-[90%] p-10 border border-[#ffffff27] bg-[#2D2D30] rounded-md "
        ></div>
      )}
    </div>
  );
};

export default SearchBtn;
