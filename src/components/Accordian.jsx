import React, { useState } from "react";
import { FaBold, FaItalic, FaUnderline, FaImage } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateQuestion, updateOptions } from "../state/QuestionSlice";

const Accordian = ({ question, option, index }) => {
  const [inputValue, setInputValue] = useState(question ? question : option);
  const [ques, setQues] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();
  // console.log("index", index);

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setQues(ques + `<img src="${reader.result}" alt="image">`); // Insert an image tag with base64 encoded image
        setImagePreview(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Dispatch the corresponding action based on whether it's a question or an option
    if (question) {
      dispatch(updateQuestion({ index: index, questionData: newValue }));
    } else {
      dispatch(updateOptions({ index: index, optionsData: newValue }));
    }
  };

  return (
    <div className=" flex text-sm m-2 mb-4">
      <div>
        {imagePreview && (
          <div>
            <img
              src={imagePreview}
              alt="preview"
              className="w-24 h-auto rounded-md"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col mb-2 w-full">
        <div className="flex justify-start items-start gap-2 ml-3 mb-2">
          <FaBold size={18} className="text-white cursor-pointer" />
          <FaItalic size={18} className="text-white cursor-pointer" />
          <FaUnderline size={18} className="text-white cursor-pointer" />
          <label htmlFor="file-upload">
            <FaImage size={20} className="text-white cursor-pointer" />
          </label>
          <input
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleAddImage}
          />
        </div>

        <input
          className="w-full h-14 bg-red-700 shadow-lg rounded-md p-2 mr-2"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Accordian;
