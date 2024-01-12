import React from "react";
import Icon from "./Icon";
import { BsCloudSunFill, BsFillCloudsFill } from "react-icons/bs";
import { FaCloud, FaSkyatlas } from "react-icons/fa";
import { RiMistFill } from "react-icons/ri";
import { IoSnow, IoThunderstormSharp } from "react-icons/io5";

const MultipleIcons = () => {
  return (
    <>
      <FaSkyatlas
        size={480}
        className={`absolute opacity-70 left-10 text-gray-600 top-20 z-auto`}
      />
      <IoThunderstormSharp
        size={150}
        className={`absolute opacity-70 ml-20 left-96 text-gray-600 top-20 z-auto`}
      />
      <BsFillCloudsFill
        size={250}
        className={`absolute opacity-70 ml-20 right-0 text-gray-600 top-2 z-auto`}
      />
      <IoSnow
        size={160}
        className={`absolute opacity-70 left-96 ml-10 text-gray-600 top-96 z-auto App-logo`}
      />
      {/* <BsFillCloudsFill
        size={180}
        className={`absolute opacity-100 left-96 text-green-400 top-20 z-auto`}
      />
      <FaCloud
        size={180}
        className={`absolute opacity-100 left-40 text-yellow-400 top-20 z-auto`}
      /> */}
      <BsCloudSunFill
        size={530}
        className={`absolute opacity-40 right-20 text-gray-700 top-32 z-auto`}
      />
    </>
  );
};

export default MultipleIcons;
