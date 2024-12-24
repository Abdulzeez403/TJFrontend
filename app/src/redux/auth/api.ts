import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "./type";
import { setCookie } from "../../../hooks/cookieHook";

interface AxiosErrorResponse {
  response?: {
    data: {
      message: string;
    };
    status?: number;
  };
  message?: string;
}

// Async actions
export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/auth/login`,
        credentials
      );
      setCookie({ token: response.data.token });

      return response.data;
    } catch (error) {
      // Type the error as AxiosErrorResponse to avoid 'any'
      const err = error as AxiosErrorResponse;

      // Provide the rejectWithValue with a typed error object
      return rejectWithValue({
        message: err?.response?.data?.message ?? err.message ?? "Unknown error",
        status: err?.response?.status,
      });
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData: IUser, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/auth/register`,
        userData
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosErrorResponse;

      // Provide the rejectWithValue with a typed error object
      return rejectWithValue({
        message: err?.response?.data?.message ?? err.message ?? "Unknown error",
        status: err?.response?.status,
      });
    }
  }
);
