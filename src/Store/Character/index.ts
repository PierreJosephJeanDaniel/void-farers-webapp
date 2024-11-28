import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit/react";
import { CharacterProps } from "../../Screens/CharacterSelection/types";

const initialState: CharacterProps = {
  Name: "",
  Abilities: {},
  Waits: {},
  MaxHp: 0,
  Hp: 0,
  MaxArmor: 0,
  Armor: 0,
  MaxAegis: 0,
  Aegis: 0,
  IsDm: false,
  User: "",
};

const character: Slice<CharacterProps> = createSlice({
  name: "character",
  initialState: initialState,
  reducers: {
    updateCharacter: (
      state: CharacterProps,
      action: PayloadAction<CharacterProps>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    increaseHp: (state: CharacterProps) => {
      const newHp: number =
        state.Hp + 1 <= state.MaxHp ? state.Hp + 1 : state.MaxHp;
      return {
        ...state,
        hp: newHp,
      };
    },
    decreaseHp: (state: CharacterProps) => {
      const newHp: number = state.Hp - 1 >= 0 ? state.Hp - 1 : 0;
      return {
        ...state,
        hp: newHp,
      };
    },
    increaseArmor: (state: CharacterProps) => {
      const newShield: number =
        state.Armor + 1 <= state.MaxArmor ? state.Armor + 1 : state.MaxArmor;
      return {
        ...state,
        armor: newShield,
      };
    },
    decreaseArmor: (state: CharacterProps) => {
      const newShield: number = state.Armor - 1 >= 0 ? state.Armor - 1 : 0;
      return {
        ...state,
        armor: newShield,
      };
    },
    increaseAegis: (state: CharacterProps) => {
      const newAegis: number =
        state.Aegis + 1 <= state.MaxAegis ? state.Aegis + 1 : state.MaxAegis;
      return {
        ...state,
        aegis: newAegis,
      };
    },
    decreaseAegis: (state: CharacterProps) => {
      const newAegis: number = state.Aegis - 1 >= 0 ? state.Aegis - 1 : 0;
      return {
        ...state,
        armor: newAegis,
      };
    },
  },
});

export const {
  updateCharacter,
  increaseHp,
  decreaseHp,
  increaseArmor,
  decreaseArmor,
  increaseAegis,
  decreaseAegis,
} = character.actions;

export default character.reducer;
