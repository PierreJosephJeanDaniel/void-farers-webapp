import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";
import Popup from "./Popup";
import Character from "./Character";
import Inventory from "./Inventory";
import Chat from "./Chat";
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
import ChangeTracker from "./ChangeTracker";

// export const reducers = combineReducers({ Auth, Popup });

// const store = configureStore({ reducer: reducers });
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "character", "inventory", "chat", "changeTracker"],
};

const rootReducer = combineReducers({
  popup: Popup,
  auth: Auth,
  character: Character,
  inventory: Inventory,
  chat: Chat,
  changeTracker: ChangeTracker,
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
