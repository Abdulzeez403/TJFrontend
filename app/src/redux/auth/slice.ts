import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./api";
import { IUser } from "./type";

interface logError {
  message: string;
}

interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: null | string;
  success: null | string;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  success: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
        state.success = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        if (action.payload) {
          const error = action.payload as logError;
          state.error = error.message;
        }
        state.loading = false;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
        state.success = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        if (action.payload) {
          const error = action.payload as logError;
          state.error = error.message;
        }
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
