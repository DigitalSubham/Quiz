import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { AiFillSetting } from "react-icons/ai";
import Question from "./Question";
import AddTag from "./AddTag";
import { useSelector } from "react-redux";
import Button from "./Button";
import QuizMeta from "./QuizMeta";
import Preview from "./Preview";

const Body = () => {
  const d = useSelector((store) => store.demo.data)[0];
  const QuizMetaTitle = useSelector((store) => store.QuizMeta.inputData);
  const preview = useSelector((store) => store.demo.prev);

  const [showModal, setShowModal] = useState(false);
  const handleMeta = () => {
    setShowModal(true);
  };
  return (
    <div className="flex w-screen">
      <Sidebar />
      {!preview ? (
        <div className="flex flex-col w-full ml-2 mt-4">
          <div className="flex justify-between ">
            <div className="">
              <button
                className="flex items-center gap-2 text-2xl font-bold"
                onClick={handleMeta}
              >
                {QuizMetaTitle}
                <span>
                  <AiFillSetting size={25} />
                </span>
              </button>
            </div>
            <div className="flex gap-2 ">
              <AddTag />
              <Button
                text={"Add Explanation"}
                iconName={"FaLightbulb"}
                color={"from-purple-600 to-blue-500"}
              />
            </div>
          </div>
          <div className="mx-auto mt-16 text-gray-300 text-2xl w-full h-fit">
            {d === undefined ? (
              "Click new question to add a question or click on an existing question to edit"
            ) : (
              <Question />
            )}
          </div>
          {showModal && <QuizMeta setShowModal={setShowModal} />}
        </div>
      ) : (
        <Preview />
      )}
    </div>
  );
};

export default Body;
