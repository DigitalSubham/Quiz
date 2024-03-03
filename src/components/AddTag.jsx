import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addTags, removeTags } from "../state/QuizMetaSlice";

const AddTag = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  // console.log("tags", tags);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTags([...tags, inputValue]);
    dispatch(addTags(inputValue));
    setInputValue("");
  };

  function handleDelete(index) {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
    dispatch(removeTags(index));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add Tags"
          className="border-[1px] rounded-md items-center p-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="Submit"
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-full gap-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>
      <ul className="z-10">
        {tags.map((tag, index) => (
          <li key={tag}>
            {tag}
            <button onClick={() => handleDelete(index)}>
              <RxCross2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTag;
