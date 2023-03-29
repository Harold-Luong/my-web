import { configureStore } from "@reduxjs/toolkit";

import gallerySliceReducer from "./features/gallery/gallerySlice";
export default configureStore({
  reducer: {
    page: gallerySliceReducer,
  },
});
