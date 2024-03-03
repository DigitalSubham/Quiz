import React, { useState } from "react";
import { FaBold, FaItalic, FaUnderline, FaImage } from "react-icons/fa";

const Accordian = ({ question, option }) => {
  const [ques, setQues] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleBold = () => {
    setQues(ques + "<b></b>"); // Wrap selected text in <b> tags
  };

  // Function to handle adding italic text
  const handleItalic = () => {
    setQues(ques + "<i></i>"); // Wrap selected text in <i> tags
  };

  // Function to handle adding underline text
  const handleUnderline = () => {
    setQues(ques + "<u></u>"); // Wrap selected text in <u> tags
  };

  // Function to handle adding an image from local
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
          {" "}
          <FaBold
            size={18}
            className="text-white cursor-pointer"
            onClick={handleBold}
          />
          <FaItalic
            size={18}
            className="text-white cursor-pointer"
            onClick={handleItalic}
          />
          <FaUnderline
            size={18}
            className="text-white cursor-pointer"
            onClick={handleUnderline}
          />
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
          value={question ? question : option}
          onChange={(e) => setQues(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Accordian;
