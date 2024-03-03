import React from "react";
import { FaSave } from "react-icons/fa";
import Button from "./Button";

const SearchAndSide = () => {
  return (
    <div className="flex flex-col justify-center sticky bottom-24 bg-white">
      <Button
        text={" Search Library"}
        iconName={"FaSearch"}
        color={"from-gray-300 to-gray-600"}
      />
      <Button
        text={"Save Draft"}
        iconName={"FaSave"}
        color={"from-purple-600 to-blue-500"}
      />
    </div>
  );
};

export default SearchAndSide;
