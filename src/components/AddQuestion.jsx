import React from "react";

const AddQuestion = ({ question }) => {
  return (
    <div>
      {question !== null && (
        <div className="border-2 border-black  flex flex-col justify-center items-center mt-3 rounded-md p-2 text-xl font-bold m-3 text-center">
          <p>{question}</p>
        </div>
      )}
    </div>
  );
};

export default AddQuestion;
