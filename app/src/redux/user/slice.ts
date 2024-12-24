import { createSlice } from "@reduxjs/toolkit";

import { deleteUser, fetchUser, fetchUsers, updateUser } from "./api";
import { IUser } from "../auth/type";

interface UserState {
  users: IUser[];
  currentUser: IUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.error = "User rejected!";

        state.loading = false;
      })
      // Fetch User
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.error = "User rejected!";
        state.loading = false;
      })
      // Update User
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
        state.loading = false;
      })
      .addCase(updateUser.rejected, (state) => {
        state.error = "User update rejected!";
        state.loading = false;
      })
      // Delete User
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //   .addCase(deleteUser.fulfilled, (state, action) => {
      //     state.users = state.users.filter((user) => user.id !== action.payload);
      //     state.loading = false;
      //   })
      .addCase(deleteUser.rejected, (state) => {
        state.error = "User delete rejected";
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
