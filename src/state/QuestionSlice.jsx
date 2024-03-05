import { createSlice } from "@reduxjs/toolkit";

const QuestionSlice = createSlice({
  name: "question",
  initialState: {
    qData: [],
  },
  reducers: {
    addQuestion: (state, action) => {
      state.qData = [];
      state.qData.push(action.payload);
    },
    updateQuestion: (state, action) => {
      const { index, questionData } = action.payload;
      if (state.qData[index]) {
        state.qData[index].question = questionData;
      }
    },
    updateOptions: (state, action) => {
      const { index, optionsData } = action.payload;
      if (state.qData[0]) {
        state.qData[0].options[index] = optionsData;
      }
    },
    clearQuestion: (state) => {
      state.qData = [];
    },
  },
});

export const { addQuestion, clearQuestion, updateQuestion, updateOptions } =
  QuestionSlice.actions;
export default QuestionSlice.reducer;
