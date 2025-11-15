// 

// store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "@/slices/authSlice";
import challengeReducer from "@/slices/challengeSlice";
import articleReducer from "@/slices/articleSlice";
import communityReducer from "@/slices/communitySlice";
import skillReducer from "@/slices/skillSlice";
import userSkillReducer from "@/slices/userSkillSlice";

// 👇 combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  challenge: challengeReducer,
  article: articleReducer,
  community: communityReducer,
  skill: skillReducer,
  userSkill: userSkillReducer,
});

// 👇 redux-persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // ✅ only persist auth slice
};

// 👇 wrap with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist needs this disabled
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
