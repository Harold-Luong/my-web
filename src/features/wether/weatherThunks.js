import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (province) => {
    const apiUrl = "https://api.openweathermap.org/data/2.5/onecall";
    const latitude = province.lat;
    const longitude = province.lng;
    const exclude = "minutely";
    const apiKey = "41c7c64562984976377bd2523a125bd8";
    const language = "en"; //or vi
    const units = "metric";
    const url = `${apiUrl}?lat=${latitude}&lon=${longitude}&exclude=${exclude}&appid=${apiKey}&lang=${language}&units=${units}`;
    try {
      const response = await axios.get(url);
      if (!response.data) {
        throw new Error("Failed to fetch weather data");
      }
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
