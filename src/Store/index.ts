import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";
import Popup from "./Popup";
import Character from "./Character";
import Inventory from "./Inventory";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

// export const reducers = combineReducers({ Auth, Popup });

// const store = configureStore({ reducer: reducers });
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "character", "inventory"],
};

const rootReducer = combineReducers({
  popup: Popup,
  auth: Auth,
  character: Character,
  inventory: Inventory,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    return middlewares;
  },
});
export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
