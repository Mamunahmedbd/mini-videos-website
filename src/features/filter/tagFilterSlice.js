import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
  author: "",
  currentPage: 1,
  postPerPage: 8,
  pages: [],
};

const filterSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
      state.currentPage = 1;
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
      state.currentPage = 1;
    },
    searched: (state, action) => {
      state.search = action.payload;
      state.currentPage = 1;
    },
    getAuthor: (state, action) => {
      state.author = action.payload;
      state.currentPage = 1;
    },
    getCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    getPages: (state, action) => {
      state.pages = action.payload;
    },
    reset: (state) => {
      state.tags = [];
      state.search = "";
      state.author = "";
      state.currentPage = 1;
    },
  },
});

export default filterSlice.reducer;
export const {
  tagRemoved,
  tagSelected,
  searched,
  getAuthor,
  getCurrentPage,
  getPages,
  reset,
} = filterSlice.actions;
