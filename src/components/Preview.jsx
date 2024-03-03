import React from "react";
import { useSelector } from "react-redux";

const Preview = () => {
  const { dropDownData, tags, inputData } = useSelector(
    (store) => store.QuizMeta
  );
  const demoData = useSelector((store) => store.demo.data);
  console.log(dropDownData, tags);

  // Iterate over the keys of dropDownData and display them
  const dropDownItems = Object.keys(dropDownData).map((key) => (
    <div key={key}>
      <p className="font-bold">{key}:</p>
      <p>{dropDownData[key]}</p>
    </div>
  ));

  // Iterate over the tags array and display each tag
  const tagItems = tags.map((tag, index) => (
    <div key={index}>
      <p>{tag}</p>
    </div>
  ));

  return (
    <div>
      <div className="ml-4">
        <p className="text-2xl underline font-bold">Quiz Details</p>
        <div className="my-2">
          <p>{inputData}</p>
          <p>Tag: {tagItems}</p>
        </div>
        <div className="text-2xl underline font-bold ml-6">
          <p>Questions</p>
          {demoData.map((each, index) => (
            <div key={index} className=" ml-48">
              <div
                className="border border-gray-200 bg-black text-white rounded-lg mb-4 list-none p-2"
                onClick={() => setToggle(!toggle)}
              >
                {each.question}
              </div>
              {each.options.map((option, optionIndex) => (
                <div
                  className="border border-gray-200 bg-black text-white rounded-lg mb-4 list-none text-[20px] p-2"
                  key={optionIndex}
                  onClick={() => setToggle(!toggle)}
                >
                  option {optionIndex + 1}: {"  "}
                  {option}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
