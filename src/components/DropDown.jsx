import React, { useState } from "react";

const DropDown = ({ formData, setFormData }) => {
  const dropdownOptions = {
    subject: ["Math", "Hindi", "Computer Science", "Biology"],
    grade: ["Grade A", "Grade B", "Grade C", "Grade D", "Grade E"],
    language: ["Hindi", "English", "Urdu", "Spanish"],
    visibility: ["public", "private"],
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      {Object.keys(dropdownOptions).map((key) => (
        <div className="mb-4 " key={key}>
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

export default DropDown;
