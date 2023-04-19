import { configureStore } from "@reduxjs/toolkit";
import gallerySliceReducer from "./features/gallery/gallerySlice";
import weatherSliceReducer from "./features/wether/weatherSlice";
import { fetchWeather } from "./features/wether/weatherThunks";

export default configureStore({
  reducer: {
    page: gallerySliceReducer,
    weather: weatherSliceReducer,
  },
});
export { fetchWeather };
