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
    clearQuestion: (state) => {
      state.qData = [];
    },
  },
});

export const { addQuestion, clearQuestion } = QuestionSlice.actions;
export default QuestionSlice.reducer;
