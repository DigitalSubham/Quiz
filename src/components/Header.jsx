import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addData, clearData, showPrev } from "../state/DemoSlice";
import data from "../data.json";
import { addQuestion, clearQuestion } from "../state/QuestionSlice";
import Button from "./Button";

const Header = () => {
  const d = useSelector((store) => store.demo.data)[0];
  const dispatch = useDispatch();

  const handleDemoData = () => {
    dispatch(addData(data));
    dispatch(addQuestion(data[0]));
  };
  const clearDemoData = () => {
    dispatch(clearData());
    dispatch(clearQuestion());
  };

  return (
    <div className="border-b-2 h-20 w-screen border-black flex justify-between items-center  ">
      <div className="ml-2">
        <Button
          text={"Back"}
          iconName={"FaBackward"}
          color={"from-gray-300 to-gray-500"}
          onclick={null}
        />
      </div>
      <div className="flex">
        {d === undefined ? (
          <Button
            text={"Add Test Data"}
            iconName={"FaDatabase"}
            color={"from-cyan-500 to-blue-500"}
            onclick={handleDemoData}
          />
        ) : (
          <Button
            text={"Clear Data"}
            iconName={"FaBackspace"}
            color={"from-red-300 to-red-600"}
            onclick={clearDemoData}
          />
        )}
        <Button
          text={"Preview"}
          iconName={"FaPlay"}
          color={"from-green-400 to-blue-600"}
          onclick={() => dispatch(showPrev())}
        />
        <Button
          text={"Publish"}
          iconName={"FaArrowUp"}
          color={"from-purple-500 to-pink-500"}
          onclick={null}
        />
      </div>
    </div>
  );
};

export default Header;
