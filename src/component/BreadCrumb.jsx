import React from "react";
import { useSelector } from "react-redux";

const BreadCrumb = () => {
  const breadCrumb = useSelector((state) => state.dataStor.activeData);
  console.log(breadCrumb)
  return (
    <div className=" px-5 border-b border-b-[#ffffff21] text-[11px] text-[#e1e0e093] bg-[#1E1E1E] py-0.5 w-full border-t border-t-[#ffffff1f]  ">
      <span>
        faruk-hosen{" "}
        <span className="text-[10px] text-[#ffffff44] ">{" > "}</span> src{" "}
        <span className="text-[10px] text-[#ffffff44] ">{" > "}</span>
        <span className="text-[11px] text-[#e1e0e0ef] ">
          {breadCrumb.name}
        </span>
      </span>
    </div>
  );
};

export default BreadCrumb;
