import { configureStore } from "@reduxjs/toolkit";
import gallerySliceReducer from "./features/gallery/gallerySlice";
import weatherSliceReducer from "./features/wether/weatherSlice";
import blogSliceReducer from "./features/blogs/blogSlice";
import { fetchWeather } from "./features/wether/weatherThunks";

export default configureStore({
  reducer: {
    page: gallerySliceReducer,
    weather: weatherSliceReducer,
    blogs: blogSliceReducer,
  },
});
export { fetchWeather };
