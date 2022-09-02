import { configureStore } from "@reduxjs/toolkit";
import tagFilterSlice from "../features/filter/tagFilterSlice";
import relatedVideosSlice from "../features/relatedVideos/relatedVideosSlice";
import tagsSlice from "../features/tags/tagsSlice";
import videoSlice from "../features/video/videoSlice";
import videoReducer from "../features/videos/videoSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagsSlice,
    video: videoSlice,
    relatedVideos: relatedVideosSlice,
    selectedTag: tagFilterSlice,
  },
});
