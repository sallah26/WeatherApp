import React from "react";
import { FaCloud } from "react-icons/fa";

const Icon = (props) => {
  // you
  // can manage weather it is
  // hidden or not in mobile screens

  const Size = props.Sizee;
  const Mleft = props.MarginLeft;
  const MTop = props.MarginTop;
  const Color = props.Color;

  return (
    // <div className="">
    <FaCloud
      size={Size}
      className={`absolute opacity-50 ${MTop} ${Mleft} ${Color} z-auto`}
    />
    // </div>
  );
};

export default Icon;
