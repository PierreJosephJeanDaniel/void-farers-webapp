import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const changeTracker = createSlice({
  name: "changeTracker",
  initialState: { change: false },
  reducers: {
    setTracker(state, action: PayloadAction<boolean>) {
      return { ...state, change: action.payload };
    },
  },
});

export const { setTracker } = changeTracker.actions;
export default changeTracker.reducer;
