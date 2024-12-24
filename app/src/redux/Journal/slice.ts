import { createSlice } from "@reduxjs/toolkit";
import { createJournal, fetchJournal } from "./api";
import { IJournal } from "./type";

interface JournalState {
  journals: IJournal[];
  journal: IJournal | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: JournalState = {
  journals: [],
  journal: null,
  loading: false,
  error: null,
};

// Create journal slice
const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch journals
      .addCase(fetchJournal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJournal.fulfilled, (state, action) => {
        state.loading = false;
        state.journals = action.payload;
      })
      .addCase(fetchJournal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch journal entries";
      })

      // Create journal
      .addCase(createJournal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createJournal.fulfilled, (state, action) => {
        state.loading = false;
        state.journals.push(action.payload); // Ensure action.payload matches IJournal
      })
      .addCase(createJournal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create journal entry";
      });
  },
});

export default journalSlice.reducer;
