import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./weatherThunks";
const initialState = {
  loading: false,
  error: null,
  weatherData: null,
  provinceVn: { name: "Hồ Chí Minh", lat: 10.8, lng: 106.65, id: 30 },
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setProvince: (state, action) => {
      state.provinceVn = JSON.parse(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.weatherData = null;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.weatherData = null;
        state.error = action.error.message;
      });
  },
});

export const selectWeatherData = (state) => state.weather.weatherData;
export const { setProvince } = weatherSlice.actions;
export default weatherSlice.reducer;
