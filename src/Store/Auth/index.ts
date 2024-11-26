import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";

interface AuthState {
  userName: string;
  isAdmin: boolean;
  userId: string;
}

interface LoginPayload {
  userName: string;
  userId: string;
}

const initialState: AuthState = {
  userName: "",
  isAdmin: false,
  userId: "",
};
const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<LoginPayload>) => {
      return {
        ...state,
        userName: action.payload.userName,
        userId: action.payload.userId,
      };
    },
    logout: () => {
      return {
        ...initialState,
      };
    },
    getAdmin: (state: AuthState, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isAdmin: action.payload,
      };
    },
  },
});

export const { login, logout, getAdmin } = auth.actions;

export default auth.reducer;
