import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";

interface PopupState {
  isOpen: boolean;
  message: string;
}

const initialState: PopupState = {
  isOpen: false,
  message: "",
};

const popup = createSlice({
  name: "popup",
  initialState: initialState,
  reducers: {
    openPopup(state, action: PayloadAction<{ message: string }>) {
      console.log("popup open store");
      console.log(action.payload.message);
      state.isOpen = true;
      state.message = action.payload.message;
    },
    closePopup(state) {
      state.isOpen = false;
      state.message = "";
    },
  },
});

export const { openPopup, closePopup } = popup.actions;

export default popup.reducer;
