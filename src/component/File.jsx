import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { TbFileHorizontalFilled } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { navDataReducer } from "../redux/dataStor";

const file = [
  {
    id: 1,
    name: "home.jsx",
    folder: "src/",
    Icon: FaReact,
    color: "text-[#30d0e1]",
  },
  {
    id: 2,
    name: "about.html",
    folder: "src/",
    Icon: FaHtml5,
    color: "text-[#ff08e6]",
  },
  {
    id: 3,
    name: "contact.ts",
    folder: "src/",
    Icon: BiLogoTypescript,
    color: "text-[#ffff02]",
  },
  {
    id: 4,
    name: "experiences.css",
    folder: "src/",
    Icon: IoLogoCss3,
    color: "text-[#ff1313]",
  },
  {
    id: 5,
    name: "projects.js",
    folder: "src/",
    Icon: FaSquareJs,
    color: "text-[#00ff80]",
  },
  {
    id: 6,
    name: "skills.json",
    folder: "src/",
    Icon: VscJson,
    color: "text-[#ffff02]",
  },
  {
    id: 7,
    name: "readme.md",
    folder: "./",
    Icon: TbFileHorizontalFilled,
    color: "text-[#4993dcdc]",
  },
];

const File = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navDataReducer(file));
  }, [dispatch]);

  return <div></div>;
};
export default File;
