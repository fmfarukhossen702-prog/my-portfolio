// import React from "react";
import Heading from "../component/Heading";
import { useSelector } from "react-redux";
import SearchBtn from "../component/SearchBtn";
import File from "../component/File";
import MainLayOut from "../component/MainLayOut";

const Root = () => {
  const searchContent = useSelector((state) => state.dataStor.search);

  return (
    <div>
      <File />
      {searchContent && <SearchBtn />}
      <Heading />
      <MainLayOut/>
    </div>
  );
};

export default Root;
