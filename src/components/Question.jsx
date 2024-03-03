import React, { useState } from "react";
import { useSelector } from "react-redux";
import DropQues from "./DropQues";
import Accordian from "./Accordian";

const Question = () => {
  const d = useSelector((store) => store.question.qData);
  const [toggle, setToggle] = useState(false);

  console.log(d);
  return (
    <div className="w-full p-2 h-fit">
      <div>
        <div className="my-2">
          <DropQues />
        </div>
      </div>
      <div className="w-full h-full gap-2 bg-red-900 p-2 rounded">
        {d.map((each, index) => (
          <div key={index} className=" ">
            <div
              className="border border-gray-200 bg-black text-white rounded-lg mb-4 list-none p-2"
              onClick={() => setToggle(!toggle)}
            >
              {each.question}
            </div>
            {toggle && <Accordian question={each.question} option={null} />}
            {each.options.map((option, optionIndex) => (
              <div>
                <div
                  className="border border-gray-200 bg-black text-white rounded-lg mb-4 list-none text-[20px] p-2"
                  key={optionIndex}
                  onClick={() => setToggle(!toggle)}
                >
                  option {optionIndex + 1}: {"  "}
                  {option}
                </div>
                {toggle && <Accordian question={null} option={option} />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
