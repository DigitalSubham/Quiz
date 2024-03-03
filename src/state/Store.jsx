import { configureStore } from "@reduxjs/toolkit";
import DemoSlice from "./DemoSlice";
import QuestionSlice from "./QuestionSlice";
import QuizMetaSlice from "./QuizMetaSlice";

const store = configureStore({
  reducer: {
    demo: DemoSlice,
    question: QuestionSlice,
    QuizMeta: QuizMetaSlice,
  },
});

export default store;
