import { configureStore } from "@reduxjs/toolkit";
import filterBtnReducer from "./features/counter/filterBtnSlice";
export default configureStore({
  reducer: {
    filter: filterBtnReducer,
  },
});
