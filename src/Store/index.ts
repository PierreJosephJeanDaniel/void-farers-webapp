import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";
import Popup from "./Popup";

// export const reducers = combineReducers({ Auth, Popup });

// const store = configureStore({ reducer: reducers });

const store = configureStore({
  reducer: {
    popup: Popup,
    auth: Auth,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
