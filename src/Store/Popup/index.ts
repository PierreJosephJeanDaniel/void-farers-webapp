import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";

interface PopupState {
  isOpen: boolean;
  message: string;
  value: number;
  critical?: "success" | "fail";
}

const initialState: PopupState = {
  isOpen: false,
  message: "",
  value: 0,
};

const popup = createSlice({
  name: "popup",
  initialState: initialState,
  reducers: {
    openPopup(
      state,
      action: PayloadAction<{
        message: string;
        value: number;
        critical?: "success" | "fail";
      }>,
    ) {
      state.isOpen = true;
      state.message = action.payload.message;
      state.value = action.payload.value;
      state.critical = action.payload.critical;
    },
    closePopup(state) {
      state.isOpen = false;
      state.message = "";
    },
  },
});

export const { openPopup, closePopup } = popup.actions;

export default popup.reducer;
