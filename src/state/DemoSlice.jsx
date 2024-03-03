import { createSlice } from "@reduxjs/toolkit";

const DemoSlice = createSlice({
  name: "demo",
  initialState: {
    data: [],
    prev: false,
  },
  reducers: {
    addData: (state, action) => {
      state.data.push(...action.payload);
    },
    clearData: (state) => {
      state.data = [];
    },
    showPrev: (state) => {
      state.prev = !state.prev; // Corrected here
    },
  },
});

export const { addData, clearData, showPrev } = DemoSlice.actions;
export default DemoSlice.reducer;
