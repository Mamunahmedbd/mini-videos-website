import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideo from "./videoAPI";

export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

export const likeAsync = createAsyncThunk(
  "video/fetchLike",
  async ({ id, countLike }) => {
    const res = await fetch(
      `https://mamun-json-server.herokuapp.com/videos/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          likes: countLike,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await res.json();
    return todo;
  }
);
export const unLikeAsync = createAsyncThunk(
  "video/fetchUnLike",
  async ({ id, countUnLike }) => {
    const res = await fetch(
      `https://mamun-json-server.herokuapp.com/videos/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          unlikes: countUnLike,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await res.json();
    return todo;
  }
);

const initialState = {
  video: [],
  loading: false,
  isError: false,
  error: "",
  loadingLikes: false,
  isErrorLikes: false,
  errorLikes: "",
  loadingUnlikes: false,
  isErrorUnlikes: false,
  errorUnlikes: "",
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.loading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.loading = false;
        state.video = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(likeAsync.pending, (state, action) => {
        state.isErrorLikes = false;
        state.loadingLikes = true;
      })
      .addCase(likeAsync.fulfilled, (state, action) => {
        state.loadingLikes = false;
        state.video.likes = action.payload.likes;
      })
      .addCase(likeAsync.rejected, (state, action) => {
        state.loadingLikes = false;
        state.video.likes = [];
        state.isErrorLikes = true;
        state.errorLikes = action.error?.message;
      })
      .addCase(unLikeAsync.pending, (state, action) => {
        state.isErrorUnlikes = false;
        state.loadingUnlikes = true;
      })
      .addCase(unLikeAsync.fulfilled, (state, action) => {
        state.loadingUnlikes = false;
        state.video.unlikes = action.payload.unlikes;
      })
      .addCase(unLikeAsync.rejected, (state, action) => {
        state.loadingUnlikes = false;
        state.video.unlikes = [];
        state.isErrorUnlikes = true;
        state.errorUnlikes = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
