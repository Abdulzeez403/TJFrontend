import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IJournal } from "./type";

export const fetchJournal = createAsyncThunk(
  "journal/fetchJournal",
  async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/journal `);
    return response.data.journals;
  }
);

export const fetchByJournalId = createAsyncThunk(
  "journal/fetchByJournalId",
  async (id: string) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/journal/${id} `
    );
    return response.data.journals;
  }
);

// Async thunk for creating a trade
export const createJournal = createAsyncThunk(
  "journal/createJournal",
  async (journal: IJournal) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/journal/`,
      journal
    );
    return response.data;
  }
);

export const deleteJournal = createAsyncThunk(
  "journal/deleteJournal",
  async (id: string) => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API}/journal/${id}`
    );
    return response.data;
  }
);

export const updateJournal = createAsyncThunk(
  "journal/updateJournal",
  async (id: string, journal: IJournal) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API}/journal/${id}`,
      journal
    );
    return response.data;
  }
);
