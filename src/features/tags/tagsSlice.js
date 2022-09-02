import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getTags from "./tagAPI";

export const fetchTag = createAsyncThunk("tag/fetchTag", async () => {
  const tags = await getTags();
  return tags;
});

const initialState = {
  tags: [],
  isError: false,
  loading: false,
  error: "",
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTag.pending, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchTag.fulfilled, (state, action) => {
        state.loading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTag.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error.message;
        state.loading = false;
        state.tags = [];
      });
  },
});

export default tagsSlice.reducer;
