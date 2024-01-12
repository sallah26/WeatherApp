import React from "react";
import { FaCloud } from "react-icons/fa";
import { BsCloudSunFill } from "react-icons/bs";

const Icon = (props) => {
  // you
  // can manage weather it is
  // hidden or not in mobile screens

  const Size = props.Sizee;
  const Mleft = props.MarginLeft;
  const MTop = props.MarginTop;
  const Color = props.Color;
  const Opacity = props.Opacity;

  return (
    // <div className="">
    <>
      <FaCloud
        size={Size}
        className={`absolute ${MTop} ${Mleft} ${Color} ${Opacity} z-auto`}
      />
      <BsCloudSunFill
        size={Size}
        className={`absolute ${MTop} ${Mleft} ${Color} ${Opacity} z-auto`}
      />
    </>
    // </div>
  );
};

export default Icon;
