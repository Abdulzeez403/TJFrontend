import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async actions
export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/api/users`
    );
    return response.data;
  } catch (error) {
    //   return rejectWithValue(error.response?.data || error.message);
    console.log(error);
  }
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/users/${id}`
    );
    return response.data;
  } catch (error) {
    //   return rejectWithValue(error.response?.data || error.message);
    console.log(error);
  }
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, userData }) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API}/users/${id}`,
        userData
      );
      return response.data;
    } catch (error) {
      // return rejectWithValue(error.response?.data || error.message);
      console.log(error);
    }
  }
);

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API}/users/${id}`);
    return id;
  } catch (error) {
    // return rejectWithValue(error.response?.data || error.message);
    console.log(error);
  }
});
