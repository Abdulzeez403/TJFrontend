import { configureStore } from "@reduxjs/toolkit";
import tradeReducer from "./Journal/slice";
import authReducer from "./auth/slice";
import userReducer from "./user/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    journal: tradeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
