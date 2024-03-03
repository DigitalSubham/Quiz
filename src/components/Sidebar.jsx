import React from "react";
import AddQuestion from "./AddQuestion";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../state/QuestionSlice";
import SearchAndSide from "./SearchAndSide";
import { GoPlusCircle } from "react-icons/go";
import { addData } from "../state/DemoSlice";

const Sidebar = () => {
  const d = useSelector((store) => store.demo.data);

  // Check if d is an array and has at least one element
  const firstDataItem = Array.isArray(d) && d.length > 0 ? d[0] : null;

  // console.log("test", firstDataItem);

  const handleQuestion = (index) => {
    dispatch(addQuestion(d[index]));
  };

  const dispatch = useDispatch();
  const handleSampleQuestion = () => {
    dispatch(
      addData([
        {
          question: "Enter Question?",
          options: ["Option 1", "Option 2", "Option 3", "Option 4"],
          answer: "Any Option",
        },
      ])
    );
    dispatch(
      addQuestion({
        question: "Enter Question?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Any Option",
      })
    );
  };

  return (
    <div className="border-r-2 border-black h-screen w-64 flex flex-col justify-between items-center overflow-y-auto relative no-scrollbar">
      {firstDataItem === null ? (
        <AddQuestion question={null} />
      ) : (
        d.map((each, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleQuestion(index)}
          >
            <AddQuestion key={index} question={each.question} />
          </div>
        ))
      )}
      <div
        className="border-2 border-black  flex flex-col justify-center items-center mt-3 rounded-md p-2 text-xl font-bold cursor-pointer"
        onClick={handleSampleQuestion}
      >
        <GoPlusCircle />
        <p> Add a Question</p>
      </div>
      <SearchAndSide />
    </div>
  );
};

export default Sidebar;
