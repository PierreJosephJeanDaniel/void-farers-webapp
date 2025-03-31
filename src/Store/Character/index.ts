import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import {
  ABILITIES,
  AbilitiesList,
  CharacterProps,
  WAITS,
  WaitsList,
} from "@/Screens/CharacterSelection/types";

const initialWaits: Record<WaitsList, number> = {
  [WAITS.WILL]: 0,
  [WAITS.ATHLETICS]: 0,
  [WAITS.INTELLIGENCE]: 0,
  [WAITS.TOUGHNESS]: 0,
  [WAITS.SIGHT]: 0,
};

const initialAbilities: Record<AbilitiesList, number> = {
  [ABILITIES.INSPIRATION]: 0,
  [ABILITIES.PSYCHIC]: 0,
  [ABILITIES.SWEET_TALK]: 0,
  [ABILITIES.NEGOTIATION]: 0,
  [ABILITIES.FORTITUDE]: 0,
  [ABILITIES.DODGING]: 0,
  [ABILITIES.SPRINTING]: 0,
  [ABILITIES.CLIMBING]: 0,
  [ABILITIES.INFILTRATION]: 0,
  [ABILITIES.MELEE]: 0,
  [ABILITIES.BALLISTICS]: 0,
  [ABILITIES.MEDICINE]: 0,
  [ABILITIES.ENERGY_WEAPONS]: 0,
  [ABILITIES.COMPUTERS]: 0,
  [ABILITIES.LANGUAGES]: 0,
  [ABILITIES.WRESTLING]: 0,
  [ABILITIES.ENGINE_OPERATIONS]: 0,
  [ABILITIES.THROWING]: 0,
  [ABILITIES.REPAIRS]: 0,
  [ABILITIES.HEAVY_WEAPONS]: 0,
  [ABILITIES.PILOTING]: 0,
  [ABILITIES.RIFLES]: 0,
  [ABILITIES.DOG_FIGHTING]: 0,
  [ABILITIES.RECON]: 0,
  [ABILITIES.ZERO_G]: 0,
};

const initialState: CharacterProps = {
  Name: "",
  Abilities: initialAbilities,
  Waits: initialWaits,
  MaxHp: 0,
  Hp: 0,
  MaxArmor: 0,
  Armor: 0,
  MaxAegis: 0,
  Aegis: 0,
  IsDm: false,
  User: "",
  Inventory: [],
  ColorId: "#000000",
};

const character: Slice<CharacterProps> = createSlice({
  name: "character",
  initialState: initialState,
  reducers: {
    updateCharacter: (
      state: CharacterProps,
      action: PayloadAction<CharacterProps>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    increaseHp: (state: CharacterProps) => {
      return {
        ...state,
        Hp: state.Hp + 1 <= state.MaxHp ? state.Hp + 1 : state.MaxHp,
      };
    },
    decreaseHp: (state: CharacterProps) => {
      return {
        ...state,
        Hp: state.Hp - 1 >= 0 ? state.Hp - 1 : 0,
      };
    },
    increaseArmor: (state: CharacterProps) => {
      return {
        ...state,
        Armor:
          state.Armor + 1 <= state.MaxArmor ? state.Armor + 1 : state.MaxArmor,
      };
    },
    decreaseArmor: (state: CharacterProps) => {
      return {
        ...state,
        Armor: state.Armor - 1 >= 0 ? state.Armor - 1 : 0,
      };
    },
    increaseAegis: (state: CharacterProps) => {
      return {
        ...state,
        Aegis:
          state.Aegis + 1 <= state.MaxAegis ? state.Aegis + 1 : state.MaxAegis,
      };
    },
    decreaseAegis: (state: CharacterProps) => {
      return {
        ...state,
        Aegis: state.Aegis - 1 >= 0 ? state.Aegis - 1 : 0,
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
