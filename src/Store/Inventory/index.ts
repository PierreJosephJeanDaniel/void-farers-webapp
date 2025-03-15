import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import { ObjectProps } from "../../Screens/CharacterSelection/types";

interface InventoryState {
  isPopupOpen: boolean;
  selectedObject: ObjectProps | null;
  objectList: ObjectProps[];
}

const initialState: InventoryState = {
  isPopupOpen: false,
  selectedObject: null,
  objectList: [],
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
    initiateInventory(state, action: PayloadAction<ObjectProps[]>) {
      state.objectList = action.payload;
    },
    addObjects(state, action: PayloadAction<ObjectProps[]>) {
      action.payload.forEach((object) => {
        state.objectList.push(object);
      });
    },
    openInvPopup(state) {
      state.isPopupOpen = true;
    },
    closeInvPopup(state) {
      state.isPopupOpen = false;
    },
  },
});

export const {
  selectObject,
  consumeObject,
  addObjects,
  initiateInventory,
  openInvPopup,
  closeInvPopup,
} = inventory.actions;

export default inventory.reducer;
