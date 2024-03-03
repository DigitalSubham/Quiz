import React, { useState } from "react";
import Button from "./Button";
import DropDown from "./DropDown";
import UploadImage from "./UploadImage";
import { useDispatch, useSelector } from "react-redux";
import {
  addInputData,
  addDropDownData,
  addImgData,
} from "../state/QuizMetaSlice";

const QuizMeta = ({ setShowModal }) => {
  const [inputValue, setInputValue] = useState(""); // State to store input value
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleModal = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    dispatch(addInputData(inputValue));
    dispatch(addDropDownData(formData));

    // Convert the selected image to base64 string
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target.result;
        dispatch(addImgData(base64String)); // Dispatch base64 string instead of File object
      };
      reader.readAsDataURL(selectedImage);
    }

    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-70  backdrop-blur-none">
      <div className="w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800 p-6 bg-white">
        <p className="text-2xl font-semibold text-richblack-5">
          Edit Quiz Cover
          <sup className="text-red-500 text-sm">
            * png and jpg format allowed
          </sup>
        </p>
        <p className="mt-3 mb-5 leading-6 text-richblack-200">
          {"Add Meta Information to Rank Better"}
        </p>
        <div className="flex">
          <div className="mb-4 border-2 w-[50%] rounded-lg">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
              placeholder="Enter meta information"
            />
            <DropDown formData={formData} setFormData={setFormData} />
          </div>
          <div className="w-[50%] border-2 h-[282px] ml-2 rounded-lg">
            <UploadImage
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Button
            text={"Save"}
            iconName={"FaSave"}
            color={"from-green-500 to-green-700"}
            onclick={handleSave}
          />
          <Button
            text={"Cancel"}
            iconName={"FaBackspace"}
            color={"from-red-500 to-red-900"}
            onclick={handleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizMeta;
