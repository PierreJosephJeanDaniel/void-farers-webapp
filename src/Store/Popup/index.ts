import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";

interface PopupState {
  isOpen: boolean;
  message: string;
  value?: number;
  critical?: "success" | "fail";
  modifier?: number;
  userName?: string; 
  colorId?: string;
  mode: "rollTypeSelect" | "rollResult" | null;
}

const initialState: PopupState = {
  isOpen: false,
  message: "",
  value: 0,
  mode: null,
};

const popup = createSlice({
  name: "popup",
  initialState: initialState,
  reducers: {
    openPopup(
      state,
      action: PayloadAction<{
        message: string;
        value?: number;
        critical?: "success" | "fail";
        modifier?: number;
        userName?: string; 
        colorId?: string;
        mode: "rollTypeSelect" | "rollResult" | null;
      }>,
    ) {
      state.isOpen = true;
      state.message = action.payload.message;
      state.value = action.payload.value;
      state.critical = action.payload.critical;
      state.modifier = action.payload.modifier;
      state.userName = action.payload.userName;
      state.colorId = action.payload.colorId;
      state.mode = action.payload.mode; 
    },
    closePopup(state) {
      state.isOpen = false;
      state.message = "";
    },
  },
});

export const { openPopup, closePopup } = popup.actions;

export default popup.reducer;
