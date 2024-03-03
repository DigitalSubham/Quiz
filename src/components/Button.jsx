import React from "react";
import * as Icons from "react-icons/fa";
const Button = ({ text, iconName, color, onclick }) => {
  const Icon = Icons[iconName];
  // console.log(func);
  return (
    <button
      type="button"
      className={`text-white bg-gradient-to-br  ${color} hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 flex items-center gap-2 text-l`}
      onClick={onclick}
    >
      <Icon size={25} />
      {text}
    </button>
  );
};

export default Button;
