import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedVideo from "./relatedVideoSliceAPI";

export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideo/fetchRelatedVideos",
  async ({ tags, id }) => {
    const relatedVideos = await getRelatedVideo({ tags, id });
    return relatedVideos;
  }
);

const initialState = {
  relatedVideos: [],
  loading: false,
  isError: false,
  error: "",
};

const relatedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.loading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.loading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideoSlice.reducer;
