import { createSlice } from "@reduxjs/toolkit/react";

interface AuthState {
  userName: string;
  isAdmin: boolean;
}

const initialState: AuthState = {
  userName: "",
  isAdmin: false,
};
const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      console.log("login in");
      state.userName = action.payload.userName;
      state.isAdmin = action.payload.isAdmin;
    },
    logout(state) {
      state.userName = "";
      state.isAdmin = false;
    },
  },
});

export const { login, logout } = auth.actions;

export default auth.reducer;
