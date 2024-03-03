import React, { useState } from "react";

const DropQues = () => {
  const dropdownOptions = {
    Type: ["Single", "Multiple"],
    Points: ["1 Point", "2 Points", "3 Points", "4 Points", "5 Points"],
    Time: ["15 Sec", "30 Sec", "45 Sec", "60 Sec"],
    Difficulty: ["Easy", "Medium", "Hard"],
  };
  const [formData, setFormData] = useState({
    selectedOption1: "",
    selectedOption2: "",
    selectedOption3: "",
    selectedOption4: "",
  });
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="flex gap-x-40 mx-2">
      {Object.keys(dropdownOptions).map((key) => (
        <div className="mb-4 text-black" key={key}>
          <select
            name={key}
            value={formData[key]}
            onChange={handleSelectChange}
            className="border border-gray-300 rounded-md p-2 "
          >
            <option className="" value="">
              Select {key}
            </option>
            {dropdownOptions[key].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default DropQues;
