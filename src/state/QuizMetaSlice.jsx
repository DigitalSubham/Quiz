import { createSlice } from "@reduxjs/toolkit";

const QuizMetaSlice = createSlice({
  name: "QuizMeta",
  initialState: {
    inputData: "Untitled Quiz",
    dropDownData: [],
    imgData: null,
    tags: [],
  },
  reducers: {
    addInputData: (state, action) => {
      state.inputData = action.payload;
    },
    addDropDownData: (state, action) => {
      state.dropDownData = [];
      state.dropDownData.push(action.payload);
    },
    addImgData: (state, action) => {
      state.imgData = action.payload;
    },
    addTags: (state, action) => {
      state.tags.push(action.payload);
    },
    removeTags: (state, action) => {
      state.tags.splice(action.payload, 1);
    },
  },
});

export const {
  addInputData,
  addDropDownData,
  addImgData,
  addTags,
  removeTags,
} = QuizMetaSlice.actions;
export default QuizMetaSlice.reducer;
