import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import {
  ObjectProps,
  testObjec1,
  testObjec2,
} from "../../Settings/InventoryObjects";

interface InventoryState {
  isPopupOpen: boolean;
  selectedObject: ObjectProps | null;
  objectList: ObjectProps[];
}

const initialState: InventoryState = {
  isPopupOpen: false,
  selectedObject: null,
  objectList: [testObjec1, testObjec1, testObjec2],
};

const inventory = createSlice({
  name: "inventory",
  initialState: initialState,
  reducers: {
    selectObject(state, action: PayloadAction<ObjectProps>) {
      state.selectedObject = action.payload;
    },
    consumeObject(state) {
      if (state.selectedObject) {
        state.selectedObject.quantity -= 1;
        if (state.selectedObject.quantity === 0) {
          state.objectList = state.objectList.filter(
            (object) => object !== state.selectedObject
          );
          state.selectedObject = null;
        }
      }
    },
    openInvPopup(state) {
      state.isPopupOpen = true;
    },
    closeInvPopup(state) {
      state.isPopupOpen = false;
    },
  },
});

export const { selectObject, consumeObject, openInvPopup, closeInvPopup } =
  inventory.actions;

export default inventory.reducer;
