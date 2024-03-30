// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
