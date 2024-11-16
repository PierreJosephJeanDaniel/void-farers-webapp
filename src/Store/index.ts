import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";
import Popup from "./Popup";

export const reducers = combineReducers({ Auth, Popup });

const store = configureStore({ reducer: reducers });

export default store;
